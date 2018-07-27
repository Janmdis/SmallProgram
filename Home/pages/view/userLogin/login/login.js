// pages/login/login.js
var utilBox = require("../../../../utils/utilBox.js");
var network = require("../../../../utils/network.js");
Page({
  data: {

  },
  formSubmit: function (e) {
    // wx.login({
    //   success:function(res){
    //     console.log(res)
    //     console.log(res.header)
    //   }
    // })
    if (utilBox.isPhone(e.detail.value.iphone)) {
      if (e.detail.value.password != "") {
        wx.showToast({
          title: '成功',
          icon: "succsee",
          duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
          mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
          success: function () {
            network.requestLoading(
              utilBox.urlheader+"admin/account/login", {
                username: e.detail.value.iphone,
                password: e.detail.value.password
              },
              "登录中请稍等...",
              function (res) {
                console.log(res.header)
                if (res.status == 200) {
                  wx.removeStorage("userInfo")
                  wx.setStorageSync("userInfo", res.info)
                  setTimeout(()=>{
                    wx.switchTab({
                      url: '../../orderWait/list/list',
                    })
                  },2000)
                }else{
                  wx.showToast({
                    title: res.msg,
                    image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
                    duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
                    mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
                  });
                }
              },
              function (res) {
                wx.showToast({
                  title: res.msg,
                  image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
                  duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
                  mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
                });
              }
            )


          }
        });

      } else {
        wx.showToast({
          title: '不能为空',
          image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
          duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
          mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
          success: function () { }, //接口调用成功的回调函数
          fail: function () { },  //接口调用失败的回调函数
          complete: function () { } //接口调用结束的回调函数
        });
      }
    } else {
      wx.showToast({
        title: '手机号码错误',
        image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
        duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
        mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false
        success: function () { }, //接口调用成功的回调函数
        fail: function () { },  //接口调用失败的回调函数
        complete: function () { } //接口调用结束的回调函数
      });
    }
  },
  quickLogon: () => {
    wx.navigateTo({
      url: '../userLogin/quickLogon/quickLogon'
    })
  },
  missCipher: () => {
    wx.navigateTo({
      url: '../missCipher/missCipher',
    })
  },

})