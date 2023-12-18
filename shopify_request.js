module.exports = (resultobj) => {
  const shopifyAPI = require('shopify-node-api');
  require('dotenv').config();
  const Shopify = new shopifyAPI({
    shop: process.env.SHOPIFY_SHOP, // MYSHOP.myshopify.com
    shopify_api_key: process.env.SHOPIFY_API_KEY, // Your API key
    access_token: process.env.SHOPIFY_ACCESS_TOKEN, //permanent token
  });
  
  const post_data = resultobj;
  // console.log(post_data)
  // console.log(post_data.product.variants);
  // console.log(post_data.product.images);
  Shopify.post('/admin/products.json', post_data, (err, data, headers) => {
    console.log(data);
    console.log('Done 🚀✨')
  });
}