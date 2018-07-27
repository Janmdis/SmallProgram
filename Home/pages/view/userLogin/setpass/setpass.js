// pages/quickLogon/quickLogon.js
var utilBox = require("../../../../utils/utilBox.js");
var network = require("../../../../utils/network.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    currentTime:30,
    time:30
  },
  formSubmit: function (e) {
    let that = this;
    let { newpass, newpasst, oldpass } =(e.detail.value)
    if (utilBox.trims(oldpass)) {
      wx.showToast({
        title: '旧密码不能为空',
        icon: 'none'
      })
      return false;
    }
    if(utilBox.trims(newpass)){
        wx.showToast({
          title: '新密码不能为空',
          icon:'none'
        })
        return false;
    }
    if (utilBox.trims(newpasst)!= utilBox.trims(newpass)) {
      wx.showToast({
        title: '二次密码不一致',
        icon: 'none'
      })
      return false;
    }
    network.requestLoading(
      utilBox.urlheader + "admin/account/updatepassword", {
        oldPassword: oldpass,
        newPassword: newpass,
        confirmPassword: newpasst

      },
      "登录中请稍等...",
      function(req){
        if(req.status==200){
         
          
        
          var currentTime = that.data.currentTime
          var interval = setInterval(function () {
            currentTime--;
            that.setData({
              time: currentTime + '秒',
              isShow: true
            })
            if (currentTime <= 0) {
              clearInterval(interval) 
              that.setData({
                time: '0',
                currentTime: 30
              })
              wx.navigateTo({
                url: '../login/login'
              })
            }
            
          }, 1000)



        }else{
          wx.showToast({
            title: req.msg,
            icon:'none'
          })
        }
        
      },
      function (req){},
    )



  },
  gologin(){
    wx.navigateTo({
      url: '../login/login'
    })
  }
})