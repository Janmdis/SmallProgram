var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否显示指示点 true 显示 false 不显示
    indicatorDots: true,
    //控制方向
    vertical: false,
    //是否自动切换
    autoplay: true,
    //自动切换时间间隔
    interval: 3000,
    //滑动动画时长
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
    //网络请求 GET方法
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      //成功后的回调
      success: function (res) {
        console.log('11111' + res),
          that.setData({
            images: res.data
          })
      }
    })
  }
})