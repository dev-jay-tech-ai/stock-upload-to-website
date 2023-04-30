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
    // csv파일을 이용하여 데이터 가져오기
    const file_csv = fs.readFileSync('./ss_data.csv');
    // 3. string으로 변환: fs로 읽은 Buffer를 문자열로 변환합니다.
    const string_csv = file_csv.toString();
    // 4. csvToJSON(CSV문자열) 함수 호출
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
        const price = await page.evaluate(() => {
          return document.querySelector('del ._1LY7DqCnwR') && document.querySelector('del ._1LY7DqCnwR').innerText;
        });
        const saleprice = await page.evaluate(() => {
          return document.querySelector('strong ._1LY7DqCnwR') && document.querySelector('strong ._1LY7DqCnwR').innerText;
        });

        const color = await page.evaluate(() => {
          return document.querySelector('button[class*=optcolor]') && Array.from(document.querySelectorAll('button[class*=optcolor]')).map((col) => col.innerText).join();
        });
        // return document.querySelector('button[class*=optsize]') && Array.from(document.querySelectorAll('button[class*=optsize]')).map((s) => s.innerText).filter((s) => s.indexOf('품절') === -1).join();

        await page.evaluate(() => {
          let radio = document.querySelector('button[class*=optcolor]');
          radio.click();
        });
        /*
        await page.setDefaultNavigationTimeout(9000);
        await page.evaluate(async () => {
          await new Promise((resolve) => {
            let totalHeight = 0;
            let distance = 100;
            const timer = setInterval(() => {
              let scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              if(totalHeight >= scrollHeight - window.innerHeight){
                clearInterval(timer);
                resolve();
              }
            }, 300);
          });
        
      
        const content = await page.evaluate(() => {
          return document.querySelector('.se-text-paragraph.se-text-paragraph-align-center') && Array.from(document.querySelectorAll('.se-text-paragraph.se-text-paragraph-align-center')).map((a) => a.innerText );
        });

        const img = await page.evaluate(() => {
          return document.querySelector('.se-module-image-link.__se_image_link.__se_link img') && Array.from(document.querySelectorAll('.se-module-image-link.__se_image_link.__se_link img')).map((a) => a.src ).filter((a) => a.startsWith('https://') );
        });
        let imgLinks = [];
        img.forEach((m,idx) => { if(idx>2 && idx<img.length-2) imgLinks.push(m) });
        results.push([subject, price, saleprice, options, content.join(), imgLinks.join()]);*/
      }
    }   
    // console.log(results);
    // await page.close();
    // await browser.close();

    // await createData(results);
  }
   catch(err) {
    console.log(err)
  }
}

crawler();
  // 크롤링 ****옵션 관련으로 다시 한번 연구하기
  // const trans = transplate(orgDate);
  // 쇼피파이로 전송한다
 // const request_shopify = toshopify(trans);
 // alt 넣어주기