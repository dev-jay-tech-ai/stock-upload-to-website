module.exports = (arr) => {
  const objectify = require('./objectify');
  const detail = require('./detail');
  const express = require('express');
  const app = express();
  const axios = require('axios');
  require('dotenv').config();
  const client_id = process.env.PAPAGO_CLIENT_ID;
  const client_secret = process.env.PAPAGO_CLIENT_SECRET;

  const query = arr[0].trim()+'&'+arr[3].trim()+'&'+arr[7].trim()+'&'+arr[8].trim()+'&'+arr[9].trim();
  app.get('/translate', function (req, res) {
    const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    const options = {
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret,
      },
      data: {
        source: 'ko',
        target: 'en',
        text: query,
      },
    };

    axios.post(api_url, options.data, { headers: options.headers })
      .then(response => {
        res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
        res.end(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log('error = ' + error.response.status);
        res.status(error.response.status).end();
      });
  });

  // [ title(0), price(1), saleprice(2), color(3), size(4), content(5), imgLinks(6), brand(7), origin(8), material(9), formSize(10) ]
  axios.get('http://127.0.0.1:3000/translate')
  .then(response => {
    console.log(response.data.message.result.translatedText);
    let translated = response.data.message.result.translatedText;
    let result = translated.split('&'); // Interlocking GG Logo Lounge Pants(0) Red, White(1) Gucci (2) Italy (3) Polyamide(4)
    
    arr[0] = result[0].trim();
    arr[3] = result[1].trim();
    const brand = result[2].trim();
    arr[7] = brand;
    arr[8] = result[3].trim();
    arr[9] = result[4].trim();
    const imgLen = arr[6].split(',').length;
    // 이미지 감싸는 태그 수정해야 할 것
    const imgArr = [];
    const imgList = arr[6].split(',');
    for(let j=0; j<imgLen; j++) {
      // let imgSize = imgList[j].indexOf('cafeptthumb-phinf')!==-1?"style='height: 100%; width: auto;'":'';
      const imgEle = `<p><span>​</span></p><img src="*****이미지*****" alt="">`;
      imgArr.push(imgEle.replace('*****이미지*****',imgList[j].replace('.jpeg?type=w1600','.jpg?type=w860')))
    } 
    const content = detail
    .replaceAll('*****브랜드*****', brand)
    .replaceAll('*****이미지*****', imgArr.join(''))
    .replaceAll('*****사이즈*****', arr[4])
    .replaceAll('*****원산지*****', result[3])
    .replaceAll('*****소재*****', result[4])
    .replaceAll('*****사이즈*****', arr[10])
    arr[5] = content;
    objectify(arr);

  }).catch((error) => {
    console.log(error);
  });

  app.listen(3000, function () {
    console.log('http://127.0.0.1:3000/translate app listening on port 3000!');
  });
}