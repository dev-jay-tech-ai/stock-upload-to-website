module.exports = (arr) => {
  const objectify = require('./objectify');
  const detail = require('./detail');
  const vendor = require('./brands');
  const express = require('express');
  const app = express();
  const axios = require('axios');
  require('dotenv').config();
  const client_id = process.env.PAPAGO_CLIENT_ID;
  const client_secret = process.env.PAPAGO_CLIENT_SECRET;

  const query = arr[0].trim()+'&'+arr[3].trim()+'&'+arr[8].trim()+'&'+arr[9].trim();
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
// arr = [ subject(0), price(1), saleprice(2), color(3), sizeOption(4), content(5), imgLinks(6), brand(7), origin(8), material(9), formSize(10), barcode(11), productCode(12) ]
  axios.get('http://127.0.0.1:3000/translate')
  .then(async(response) => {
    console.log(response.data.message.result.translatedText);
    let translated = response.data.message.result.translatedText;
    let result = translated.split('&'); // Interlocking GG Logo Lounge Pants(0) Red, White(1) Italy(2) Polyamide(3)
    
    arr[0] = result[0]&&result[0].trim();
    arr[3] = result[1]&&result[1].trim();
    console.log(arr[7]);
    let brand = arr[7];
    arr[7] = await vendor(brand);
    arr[8] = result[2]&&result[2].trim();
    arr[9] = result[3]&&result[3].trim();
    // const sizes = arr[3].split(',').map((a,idx) => a+'_'+[... new Set(arr[4][idx].split(','))]).join('\n');
    const content = detail
    .replaceAll('*****브랜드*****', arr[7])
    // .replaceAll('*****사이즈*****', ''/*arr[10]*/)
    .replaceAll('*****원산지*****', result[2])
    .replaceAll('*****소재*****', result[3])
    arr[5] = content + arr[12];
    objectify(arr);

  }).catch((error) => {
    console.log(error);
  });

  app.listen(3000, function () {
    console.log('http://127.0.0.1:3000/translate app listening on port 3000!');
  });
}