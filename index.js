let colOpt =  ['Red','White'];
let theSize = ['XS,L','XS,XS'];
let variants = [];
let cnt = 1;
colOpt.forEach((color,idx) => { // 재고가 있는 컬러만큼 반복
  let sizeOpt = [...new Set(theSize[idx].split(','))].slice();
  console.log(color, sizeOpt)
  for(let size of sizeOpt) {
    let tmp = {};
    tmp.title = color + ' / ' + size;
    tmp.position = cnt++;
    variants.push(tmp);
  }
})
console.log(variants)