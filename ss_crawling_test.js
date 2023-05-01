const puppeteer = require('puppeteer');
const fs = require('fs');
const createData = require('./createData');
const e = require('cors');

function csvToJSON(csv_string){
  const rows = csv_string.split("\r\n");
  const jsonArray = [];
  const header = rows[0].split(",");
  for(let i = 1; i < rows.length; i++){
      let obj = {};
      let row = rows[i].split(",");
      for(let j=0; j < header.length; j++){
          obj[header[j]] = row[j];
      }
      jsonArray.push(obj);
  }
  return jsonArray;
}

const crawler = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--window-size=1680,1080', '--disable-notifications']
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 1080
    })
    const results = [];
    const file_csv = fs.readFileSync('./ss_data.csv');
    const string_csv = file_csv.toString();
    const arr_json = csvToJSON(string_csv);
    for (let info of arr_json) {
      const link = info[Object.keys(info)[0]];
      if(link == "") break;
      else {
        await page.goto(link);
        await Promise.race([
          page.waitForSelector('h3._copyable'), // name
          page.waitForSelector('.blind > ._1LY7DqCnwR'), // prices
          page.waitForSelector('button > span.blind') //  options
        ]);

        const subject = await page.evaluate(() => {
          return document.querySelector('h3._copyable') && document.querySelector('h3._copyable').innerText;
        });

        const color = await page.evaluate(() => {
          return document.querySelector('button[class*=optcolor]') && Array.from(document.querySelectorAll('button[class*=optcolor]')).map((col) => col.innerText).join();
        });

        const sizeOpt = await page.evaluate(async()=> {
          let elements = document.querySelectorAll('button[class*=optcolor]');
          let sizeArr = [];
          for (const element of elements) {
            for(let k=0; k<2; k++) { // 2번 클릭해야 클릭이 되기 때문
              await new Promise((resolve) => setTimeout(resolve, k * 1000));
              element.click();
            }
            // 현재 문제점: 컬러에 따른 사이즈 크롤링이 안된다
            // 컬러를 클릭한 뒤에 값을 가져와야한다 getSize 함수는 반복문 보다 빨리 실행된다
           
            const size = Array.from(document.querySelectorAll('button[class*=optsize]')).map((s) => s.innerText).filter((s) => s.indexOf('품절') === -1).join();
            sizeArr.push(size);
    
          };
          return sizeArr;
       
        });
        console.log(sizeOpt);
    }
  }  

  }catch(err) {
    console.log(err)
  }
}

crawler();
  // 크롤링 ****옵션 관련으로 다시 한번 연구하기
  // const trans = transplate(orgDate);
  // 쇼피파이로 전송한다
 // const request_shopify = toshopify(trans);
 // alt 넣어주기