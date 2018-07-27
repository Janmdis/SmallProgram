// pages/quickLogon/quickLogon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let userInfo = wx.getStorageSync("userInfo");

    if (userInfo) {
      console.log(userInfo)
    }
    this.setData({
      'userinfo': userInfo
    })
    console.log(this.data.userinfo)
  },
  onShareAppMessage: function (res) {
    console.log(res)
    return {
      title: '绿城装修管家',
      desc: '最具人气的绿城装修管家！！！！',
      path: '/pages/view/userLogin/login/login',
      imageUrl: "../../../images/logo.png",
      success: (res) => {
        console.log("转发成功", res);
      },
      fail: (res) => {
        console.log("转发失败", res);
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  goPerfect: () => {
    wx.navigateTo({
      url: '../perfectUser/perfectUser',
    })
  },
  
})