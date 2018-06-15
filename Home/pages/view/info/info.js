// pages/login/login.js
var network = require("../../../utils/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    pageSize: 30,
    hasMoreData: true,
    contentlist: [],
    datalist: [{
      tiem: '2018-01-05  13:01',
      info: '你有一个新订单请尽快接收',
      urls: "../../view/setpass/setpass"
    },{
        tiem: '2018-01-06  13:01',
        info: '你有一个新评价，点击查看',
        urls: "../../view/setpass/setpass"
      }]
      
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    that.getMusicInfo('正在加载数据...')
  },
  onPullDownRefresh: function () {
    this.data.page = 1
    this.getMusicInfo('正在刷新数据')
  },
  onReachBottom: function () {
    this.getMusicInfo('加载更多数据')
  },
  getMusicInfo: function (message) {
    var that = this
    var data = {
      showapi_appid: '25158',
      showapi_sign: 'c0d685445898438f8c12ee8e93c2ee74',
      keyword: '我',
      page: that.data.page
    }
    network.requestLoading('https://route.showapi.com/213-1', data, message, function (res) {
      console.log(res)
      var contentlistTem = that.data.contentlist
      if (res.showapi_res_code == 0) {
        if (that.data.page == 1) {
          contentlistTem = []
        }
        var contentlist = res.showapi_res_body.pagebean.contentlist
        if (contentlist.length < that.data.pageSize) {
          that.setData({
            contentlist: contentlistTem.concat(contentlist),
            hasMoreData: false
          })
        } else {
          that.setData({
            contentlist: contentlistTem.concat(contentlist),
            hasMoreData: true,
            page: that.data.page + 1
          })
        }
      } else {
        wx.showToast({
          title: res.showapi_res_error,
        })
      }

    }, function (res) {
      wx.showToast({
        title: '加载数据失败',
      })

    })
  },
 
})