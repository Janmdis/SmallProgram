function request(url, params, success, fail) {
  this.requestLoading(url, params, "", success, fail)
}
// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function requestLoading(url, params, message, success, fail, types ="application/x-www-form-urlencoded", methods="post") {
  let userInfo = wx.getStorageSync("userInfo");
  let reg = /[\W\w]*(JSESSIONID\=[\w\d\-]*)[\W\w]*/;
  let arr = reg.exec(userInfo.adminPassword);
  let cookie = RegExp.$1;
  console.log(cookie)
  wx.showNavigationBarLoading()
  if (message != "") {
    wx.showLoading({
      title: message,
      duration: 3000
    })
  }
  wx.request({
    url: url,
    data: params,
    header: {
      // 'Content-Type': 'application/json'
      'content-type': types,
       cookie: cookie
    },
    method: methods,
    success: function (res) {
      //console.log(res.data)
      wx.hideNavigationBarLoading()
      // if (message != "") {
      //   wx.hideLoading()
      // }
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }

    },
    fail: function (res) {
      wx.hideNavigationBarLoading()
      // if (message != "") {
      //   wx.hideLoading()
      // }
      fail()
    },
    complete: function (res) {

    },
  })
}
module.exports = {
  request: request,
  requestLoading: requestLoading
}