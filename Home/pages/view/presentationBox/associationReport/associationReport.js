// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: '王维',
      phone: '15000865574',
      add: '是的冯绍峰看放到视'
    }, {
      name: '王维',
      phone: '15000865574',
      add: '是的冯绍峰看放到视'
    }, {
      name: '王维',
      phone: '15000865574',
      add: '是的冯绍峰看放到视'
    },
    {
      name: '王维',
      phone: '15000865574',
      add: '是的冯绍峰看放到视'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  quickLogon: () => {
    wx.navigateTo({
      url: '../quickLogon/quickLogon'
    })
  },
  missCipher: () => {
    wx.navigateTo({
      url: '../missCipher/missCipher',
    })
  },
  login: () => {
    wx.switchTab({
      url: '../orderOwner/orderOwner',
    })
  },
})