const madam = require('./madam_write');
const schedule = require('node-schedule');
const fs = require('fs');
const file_name = 'data.json';
const data = JSON.parse(fs.readFileSync(file_name).toString());
let product_index = data.index // 29까지

// madam(product_index,file,madam_token);
// sunflower(product_index,file,sunflower_token,file_name,data);

/** 
 * 평일 영국시간 오전 1시 - 오전 5:50  
 * 주말 영국시간 오전 9시 - 오후 1:50
*/

if(product_index < 121) {
  schedule.scheduleJob('0 0/5 0-8 * * *',async () => { 
    console.log('Timer Started 🧨 💣 ✨ ', new Date().toString(), 'Working with index:', product_index);
    await madam(product_index);
  });
}