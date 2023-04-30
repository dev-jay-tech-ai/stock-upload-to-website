// [ subject, price, saleprice, color, size, content, imgLinks ]
// const arr = [
//   '구찌 인터로킹 GG 로고 라운지 팬츠 655177 / (2컬러)​ S1000200',
//   '1,264,000',
//   '489,000',
//   '레드,화이트',
//   'XS,L',
//   '​,​,​,#네이버해외직구X영국아울렛,​,​,​,​,​​,편하게 입기 좋은 스타일의,​,구찌 인터로킹 GG 로고 라운지 팬츠가 입고되었습니다:-),​,구찌의 GG 로고가 고급스럽게 포인트 되어줍니다.,​,라라런던에서 추천드려요 ♥,​,​,​,​,​,​,◆ 상품 상세정보 ◆,★ 본 상품은 관부가세 포함 상품입니다 ★,​,[브랜드],구찌,​,[원산지],이탈리아,​,[사이즈],XS(국내 44),L(국내 77),​,[소재],폴리아미드,​,[색상],화이트,레드​,매장 조명에 따라,보시는 화면에 따라 실제 색상과 차이가 있을 수 있는 점 참고 바랍니다.,​,[구성품],본품,(해당 구성품은 현지 매장 상황에 따라,달라질 수 있음을 알려드립니다),​,​, ◆ ​제품과 함께 코디된 톰브라운 여성 울 믹스 풀오버 제품도 라라런던에서 만나보세요  ◆,​,​,​,​,레드​,​,​,​,​,​,​,​,​,​,​,​,​,​,화이트,​,​,​,​,​,​,​,​,​,​,​,​,​,​,​,​,※높은 할인율로 구매되는 상품으로,스크래치,주름,올나감,본드자국 및 오염,,택 달랑거림,택(또는 소재택)미포함 등이 확인될 수 있으니,구매 전 반드시 참고바랍니다.,이는 무상 교환 및 무상 반품의 사유가 되지 않습니다.,​,※명품 브랜드의 경우 수작업으로 제조되는 특성때문에,바느질 및 마감처리가 일정하지 않을 수 있습니다.,​,※아울렛 상품의 특성상,미세 스크래치,주름,찍힘,택 달랑거림,택(또는 소재택)미포함 등이 있을 수 있으니,,유의하여 구매 부탁드립니다.,이는 무상 교환 및 무상 반품의 사유가 되지 않음을 알려드립니다.,​,※ 단순변심으로 인한 교환 및 반품요청시,반품배송비 및 제반 비용(현지관세)를 지불 후 교환 반품이 가능합니다.,​,체크리스트,​,기프트영수증 포함□ 미포함■,브랜드 박스 포함□ 미포함■,브랜드 쇼핑백 포함□ 미포함■,더스트백 포함□ 미포함■,참고,​,해당 상품의 원화 정상가는 1 GBP=1,600원환율 기준으로 설정된 현지가격 입니다.,TAG에 표기된 상품 정상가의 원화가격은 실시간 환율 적용시 다소 차이가 있을 수 있습니다.,​,​,​,​,​',
//   'https://shop-phinf.pstatic.net/20230107_213/1673019538943esqsL_JPEG/KakaoTalk_20230106_153114728.jpg?type=w860,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMTAz/MDAxNjcyMjIyMDcwODE1.DARKdBWwm7gL2rvS7KiigeqfDBBeXpvoptKzsPRwNYkg.KnH26xGwDSqwUMDDZs5ePcbeCv4wvOzZ9M4wlidPkPMg.JPEG/KakaoTalk_Photo_2022-12-28-10-07-41_001.jpeg?type=w1600,https://shop-phinf.pstatic.net/20230107_184/167301952753840I8M_JPEG/KakaoTalk_20230106_153102740_03.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_180/1673019525606SCkPr_JPEG/KakaoTalk_20230106_153102740.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_293/1673019527849GYui5_JPEG/KakaoTalk_20230106_153102740_01.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_66/1673019525616UcE1r_JPEG/KakaoTalk_20230106_153102740_02.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_184/167301952753840I8M_JPEG/KakaoTalk_20230106_153102740_03.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_61/1673019528067MjTly_JPEG/KakaoTalk_20230106_153102740_04.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_6/167301952808793bMs_JPEG/KakaoTalk_20230106_153102740_05.jpg?type=w860,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfNjQg/MDAxNjcyMjIyMDY5MDU5.Dg59Shg7SUxvyUkIG0gCYU71uLFtXxkuaBANtTeTuFQg.Qtu-7QscsfqDEDyN_snOv1wtooII4FeTzA5vimQ-zqIg.JPEG/KakaoTalk_Photo_2022-12-28-10-07-41_002.jpeg?type=w1600,https://shop-phinf.pstatic.net/20230107_213/1673019538943esqsL_JPEG/KakaoTalk_20230106_153114728.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_199/1673019540327UcflE_JPEG/KakaoTalk_20230106_153114728_01.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_150/16730195403190NX9i_JPEG/KakaoTalk_20230106_153114728_02.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_37/16730195401063ignu_JPEG/KakaoTalk_20230106_153114728_03.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_134/1673019545495lN1go_JPEG/KakaoTalk_20230106_153114728_04.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_54/167301954573242bpp_JPEG/KakaoTalk_20230106_153114728_05.jpg?type=w860,https://shop-phinf.pstatic.net/20230107_109/1673019541262B5wG3_JPEG/KakaoTalk_20230106_153114728_06.jpg?type=w860,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMjc5/MDAxNjcyMjIyMDc2MTcy.G7mzzjfYolWVQr9ZdoVH8NLnzmSWIEsSTLjoR99MuYkg.lXVqHFlMs7TWzxgdgiAQXkR0GY_xgjDN5-TV1JxUHVgg.JPEG/KakaoTalk_Photo_2022-12-28-10-06-48_001.jpeg?type=w1600,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMjkg/MDAxNjcyMjIyMDc2MTk1.w6KG0wNcDv4BG2eYOYFFchQuMmzISTKIJsM32YDAJ_gg.P9_mFn32aH1haftjXf6NgCQAAIdTwMA8bT27Z02hJngg.JPEG/KakaoTalk_Photo_2022-12-28-10-06-48_002.jpeg?type=w1600,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMjQ5/MDAxNjcyMjIyMDc2ODE5.J71kXmbNLVglh9m9WfR_uIWFwSeBzQD8xqbvnm35_hUg.gTe1p_LI6uYzTjokWdqs0Q1Fd1cWzKym9mUBC692ahkg.JPEG/KakaoTalk_Photo_2022-12-28-10-06-48_003.jpeg?type=w1600,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMjY1/MDAxNjcyMjIyMDc2ODQ5.Lvjw8pOcCYxAINO32HH5WLiu--07JxFDsuN8ky2h4Bgg.OIOMyz9QHRz5wVtL7L5NEdIzNy46YBxKX5eIipkjMwkg.JPEG/KakaoTalk_Photo_2022-12-28-10-06-50_004.jpeg?type=w1600,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMTY2/MDAxNjcyMjIyMDc2Njcw.TDLpPzEGPogtfxo2d3IFQK5PrI6BgSGtiAyHcP1UU3Qg.oJSYZFFt6jgQZAB40-K3Tt5vcyRJd2ypzj9u5IP4C7sg.JPEG/KakaoTalk_Photo_2022-12-28-10-06-53_005.jpeg?type=w1600,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfNzEg/MDAxNjcyMjIyMDc2OTY4.Swv6P_G0Zl8DoiMltLzrSPiQHFFQz4nZRTKmM7wSdNYg.QT4ytEGkxKPCwIgn2xrQTKoBhT7fES5gE3yL9nOn0wMg.JPEG/KakaoTalk_Photo_2022-12-28-10-06-55_006.jpeg?type=w1600,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMTM0/MDAxNjcyMjIyMDgwNjQ0.AQRIcC5CdqMcva0aKkjUAumdgKmvx-6SUuaGiWEv5hAg.m_YbcnGXv1pMxzWxJrcoV9Cc9N3dZk5b1D_zsVTtCoMg.JPEG/KakaoTalk_Photo_2022-12-28-10-06-58_007.jpeg?type=w1600,https://cafeptthumb-phinf.pstatic.net/MjAyMjEyMjhfMTQy/MDAxNjcyMjIyMDc5MzU0.bnrNpI7nQ79TOCGbxt5uYM0d2V56R_I2A5mAwaeQnQ4g.FrwB5KANejI6xVc4FloV-2jU4ArVU3Y285sWkMDpkW0g.JPEG/KakaoTalk_Photo_2022-12-28-10-06-58_008.jpeg?type=w1600'
// ];
module.exports = (arr) => {
  const shopify_request = require('./shopify_request');
  let obj = {};
  obj.product = {};
  let product = obj.product;
  let titleArr = arr[0].replace(' /','/').trim().split('/')[0].split(' ');
  titleArr.splice(titleArr.length - 1);;
  let title = titleArr.slice(1).join(' ');
  let vendor = titleArr.shift();
  product.title = title;
  product.body_html = arr[5];
  product.vendor = vendor;
  product.product_type = 'Top';
  product.status = 'draft';
  let variants = []; // 배열임
  product.variants = variants;
  const colOpt = arr[3].split(',');
  const sizeOpt = arr[4].split(',');
  for(let color of colOpt) { // 재고가 있는 컬러만큼 반복
    let tmp = {};
    for(let size of sizeOpt) {
      tmp.title = color + ' / ' + size;
      tmp.price = arr[2];
      tmp.sku = null;
      tmp.position = 1;
      tmp.compare_at_price = arr[1];
      tmp.fulfillment_service = 'manual';
      tmp.inventory_management = 'shopify';
      tmp.option1 = color;
      tmp.option2 = size;
      tmp.option3 = null;
      tmp.taxable = true;
      tmp.inventory_quantity = 1; // 재고 수량 데폴트 값 혹은 수량 입력 요함
      tmp.requires_shipping = true;
    }
    variants.push(tmp);
  }
  let options = [];
  product.options = options;
  options.push({});
  options.push({});
  options[0].name = 'Colour';
  options[0].position = 1;
  options[0].values = colOpt;
  options[1].name = 'Size';
  options[1].position = 2;
  options[1].values = sizeOpt;

  let images = [];
  let imglinks = arr[6].split(',');
  for(let i=0; i<imglinks.length; i++) {
    let tmp = {};
    tmp.position = Number(i+1);
    tmp.alt = null;
    tmp.width = 1125;
    tmp.height = 1500;
    tmp.src = imglinks[i];
    images.push(tmp);
  }
  product.images = images;
  // console.log(obj);
  shopify_request(obj);
}