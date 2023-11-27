function getDeviceType() {
    /** true = 移动端 false = pc端  */
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
}
// 用于获取产品 Metafields 的函数
function getProductMetafields(productId) {
    // 构建 Shopify Ajax 请求 URL
    var url = '/admin/products/' + productId + '/metafields.json';
    // 发起 Ajax 请求
    $.ajax({
      type: 'GET',
      url: url,
      success: function(data) {
        // 处理从 Shopify 获取的 Metafields 数据
        console.log(data);
      },
      error: function(error) {
        console.error('获取 Metafields 时出错：', error);
      }
    });
  }


// 删除商品
// fetch('/cart/change.js', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     quantity: 0,
//     id: variant_id
//   })
// })
// .then(response => response.json())
// .then(cart => {
//   // 成功删除后的处理
// });