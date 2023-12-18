module.exports = async(results) => {
const translate = require('./papago');
// const shopify_request = require('./shopify_request');
let arr = []; 
results.map((result) => { // title[0], price[1], saleprice[2], color[3], sizeOpt[4], content.join()[5], imgLinks.join()[6], barcode[7], productCode[8]
  let text = result[5].replaceAll(/\s+(?=[^[\]]*\])/g,'').replace(/(\s*)/g, "").replace(/\n/g, ""); // []안에 공백을 삭제하는 로직 구현, 모든 줄바꿈 공백을 제거
  const brandIdx = text.indexOf('[브랜드]')+6;
  const brand = text.slice(brandIdx,text.indexOf('[',brandIdx+1)).replaceAll(',','');
  const sizeIdx = text.indexOf('[사이즈]')+6;
  const formSize = text.slice(sizeIdx,text.indexOf('[',sizeIdx+1)).replaceAll(',','').replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim, '');;
  const orginIdx = text.indexOf('[원산지]')+6;
  const origin = text.slice(orginIdx,text.indexOf('[',orginIdx+1)).replaceAll(',','');
  const materialIdx = text.indexOf('[소재]')+5;
  const material = text.slice(materialIdx,text.indexOf('[',materialIdx+1)).replaceAll(',','');
  const saleprice = typeof result[1] == "undefined" || result[1] == null || result[1] == ""?result[2]:result[1];
  const currency  = (pr) => { 
    let priceset = Number(pr.replaceAll(',',''))/1600;
    return Math.ceil(Number(priceset)/10) * 10;
  }; // [ subject(0), price(1), saleprice(2), color(3), sizeOption(4), content(5), imgLinks(6), brand(7), origin(8), material(9), formSize(10), barcode(11), productCode(12) ]
  arr.push([ result[0], currency(saleprice), currency(result[2]), result[3], result[4], 'content', result[6], brand, origin, material, formSize, result[7], result[8] ]);
});

translate(arr[0]);
}