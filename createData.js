module.exports = async(results) => {
const objectify = require('./objectify');
const detail = require('./detail');
// const shopify_request = require('./shopify_request');
let arr = [];
results.map((result) => { // [ subject(0), price(1), saleprice(2), color(3), size(4), content(5), imgLinks(6) ]
  let text = result[5].replaceAll(/\s+(?=[^[\]]*\])/g,'').replace(/(\s*)/g, "").replace(/\n/g, ""); // []안에 공백을 삭제하는 로직 구현, 모든 줄바꿈 공백을 제거
  const brandIdx = text.indexOf('브랜드')+4;
  const brand = text.slice(brandIdx,text.indexOf('[',brandIdx+1)).replaceAll(',','');
  const sizeIdx = text.indexOf('사이즈')+4;
  const formSize = text.slice(sizeIdx,text.indexOf('[',sizeIdx+1)).replaceAll(',','');;
  const orginIdx = text.indexOf('원산지')+4;
  const origin = text.slice(orginIdx,text.indexOf('[',orginIdx+1)).replaceAll(',','');;
  const materialIdx = text.indexOf('소재')+3;
  const material = text.slice(materialIdx,text.indexOf('[',materialIdx+1)).replaceAll(',','');;
  const imgEle = `<p><span>​</span></p><img src="*****이미지*****" alt="" >`;
  const imgArr = [];
  const imgList = result[6].split(',');
  for(let j=0; j<imgList.length; j++) {
    imgArr.push(imgEle.replace('*****이미지*****', imgList[j]))
  } 
  const content = detail
  //.replace('*****오리지널제목*****', result[1])
  // .replace('*****바잉팀코멘트*****', formPrice+'\n'+formColor+'\n'+formSize+'\n'+formEtc+'\n')
  //.replace('***** 매니저코멘트 *****', result.Mcomment?result.Mcomment:"")
  // .replace('*****카페링크*****', linkInfo)
  .replaceAll('*****브랜드*****', brand)
  .replaceAll('*****이미지*****', imgArr.join(''))
  .replaceAll('*****사이즈*****', formSize)
  .replaceAll('*****원산지*****', origin)
  .replaceAll('*****소재*****', material)

  const currency  = (pr) => { 
    let priceset = Number(pr.replaceAll(',',''))/1600;
    return Math.ceil(Number(priceset)/10) * 10;
  };
  arr.push([ result[0], currency(result[1]), currency(result[2]), result[3], result[4], content, result[6] ]);
});

// const trans = transplate(orgDate); 배열 정보를 먼저 번역하고 오브젝트화 한다.
const obj = objectify(arr[0]);
// await shopify_request(obj);
}