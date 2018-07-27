// pages/missCipher/missCipher.js
var utilBox = require("../../../../utils/utilBox.js")
var network = require("../../../../utils/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '获取验证码', //倒计时 
    currentTime: 60,
    condition:true,
    tiems:true
  },
  formSubmit: function (e) {
    if (!utilBox.trims(e.detail.value.password)) {
      if (e.detail.value.password != e.detail.value.passwordT) {
        wx.showToast({
          title: '二次密码不等',
          image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
          duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
        });
      }else{
        if (!utilBox.trims(e.detail.value.codenum) && !utilBox.trims(e.detail.value.password) && !utilBox.trims(e.detail.value.passwordT ) && !utilBox.trims(e.detail.value.iphone) ){
          wx.showToast({
            title: '成功',
            icon: "succsee",
            duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
            success: function () {
              network.requestLoading(
                "https://api.jingrunjia.com.cn/api/admin/account/setpassword",
                {
                  phone:e.detail.value.iphone,
                  newPassword:e.detail.value.password,
                  confirmPassword:e.detail.value.passwordT,
                  proof:e.detail.value.codenum 
                },
                "提交中..",
                function(res){
                 if(res.status==200){
                   wx.showToast({
                     title: res.msg,
                     image: '../../../images/ok.png',  //自定义图标的本地路径，image 的优先级高于 icon
                     duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
                   });
                   setTimeout(()=>{
                     wx.navigateTo({
                       url: '../login/login',
                     })
                   },1000)
                 }else{
                   wx.showToast({
                     title: res.msg,
                     image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
                     duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
                   });
                 }
                  
                },
                function (res){
                  console.log(res)
                }
              )
              
            }
          });
        }else{
          wx.showToast({
            title: '填写错误',
            image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
            duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
          });
        }
      }
    } else {
      wx.showToast({
        title: '字母开头,6~18之间',
        image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
        duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
      });
    }
    if (utilBox.trims(e.detail.value.codenum)) {
      wx.showToast({
        title: '验证码错误',
        image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
        duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
      });
    }
    if (!utilBox.isPhone(e.detail.value.iphone)) {
      wx.showToast({
        title: '手机号码错误',
        image: '../../../images/fail.png',  //自定义图标的本地路径，image 的优先级高于 icon
        duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
      });
    }
  },
  getCode: function (options) {
    var mobile = this.data.mobile;
    if (!utilBox.isPhone(mobile)){
      wx.showToast({
        title: '手机号码不能为空',
        icon: "succsee",
        duration: 3000, //提示的延迟时间，单位毫秒，默认：1500
      });
      this.setData({
        disabled: false
      })
      return false;
    }
    network.requestLoading(
      "https://api.jingrunjia.com.cn/api/admin/account/sendphonecode",
      { phone: mobile},
      "发送中",
      function(res){
      console.log(res)
      },
      function(res){

      }
    )
    this.setData({
      disabled: true
    })
    var that = this;
    var currentTime = that.data.currentTime
    var interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '获取验证码',
          currentTime: 60,
          disabled: false
        })
      }
    }, 1000)

  },
  mobileInputEvent: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  getVerificationCode() {
    this.getCode();
    // var that = this
    // that.setData({
    //   disabled: true
    // })
  },
  gotoLogon:()=>{
   
  }
 
})