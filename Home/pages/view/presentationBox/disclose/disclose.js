// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      datalist:[
        { "name": '房间墙顶地面', "names": "房间正度", "types": "合格","condition":true},
        {"name":'房间墙顶地面',"names":"房间正度","types":"无需验收"},
        { "name": '房间墙顶地面', "names": "房间正度", "types": "不合格" },
        { "name": '房间墙顶地面', "names": "房间正度", "types": "合格" },
      ]
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