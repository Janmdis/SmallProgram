// pages/orderOwner/orderOwner.js
var network = require("../../../../utils/network.js");
var utilBox = require("../../../../utils/utilBox.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    orderIds:"",
    contentlistTem:[],
    pageSize: 30,
    hasMoreData: true,
    inputVal:"",
    list: [
      {
        ordernum: 123456,
        name: '姓名',
        phone: '15058160089',
        address: '上海浦东',
        conditon1: '复层',
        conditon2: '89',
        conditon3: '开工交底3.0',
        conditon4: '延寿街店3.0',
        status: '服务中',
        service: '陪签服务'
      }
    ],
    showcancle:true
  },

  changeshows:function(e){
    console.log(e)
    this.setData({ orderIds: e.currentTarget.dataset.ids });
    this.setData({ showcancle: false });
  },
  changeshow:function(e){
    console.log(e.currentTarget)
    var isshow=null;
    if (e.target.id =='overback'){
      isshow=true;
      
    } 
    else if (e.target.id =='cancle'){
      isshow = this.data.showcancle ? false : true;
     
    }
    
    this.setData({ showcancle: isshow});
 
  },
  formSubmit: function (options){
    
    console.log(this.data.orderIds)
    this.setData({
      inputVal: '',
    })
    console.log(options.detail.value.text)
    network.requestLoading(
      utilBox.urlheader + `product/workList/bulkDeleteByAdminId?adminId=${[wx.getStorageSync("userInfo").id]}`,
      [this.data.orderIds], "",
       function (res) {
        console.log(res)
        let resMessage = res.info
        
        if (res.status == 200) {
          wx.showToast({
            title:"放弃接单",
          })
          this.getMusicInfo('正在加载数据...')
        } else {
          wx.showToast({
            title: res.showapi_res_error,
          })
        }


      }, function (res) {
        wx.showToast({
          title: '加载数据失败',
        })
      }, 'application/json')




  },
  /**
   * 生命周期函数--监听页面加载
   */


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
    console.log();
    var that = this
    var data = {
      showapi_appid: '25158',
      showapi_sign: 'c0d685445898438f8c12ee8e93c2ee74',
      keyword: '我',
      page: that.data.page
    }
    network.requestLoading(
      utilBox.urlheader + `product/workList/queryListByAdminIds?page=${that.data.page}&pageSize=10`,
       [wx.getStorageSync("userInfo").id],
      message, function (res) {
        console.log(res)
        let resMessage = res.info.list
        console.log(resMessage)
        that.setData({list :resMessage})
        var contentlistTem = that.data.contentlist
        // if (res.status == 200) {
        //   if (that.data.page == 1) {
        //     contentlistTem = []
        //   }
        //   var contentlist = res.info
        //   if (contentlist.length < that.data.pageSize) {
        //     that.setData({
        //       contentlist: contentlistTem.concat(contentlist),
        //       hasMoreData: false
        //     })
        //   } else {
        //     that.setData({
        //       contentlist: contentlistTem.concat(contentlist),
        //       hasMoreData: true,
        //       page: that.data.page + 1
        //     })
        //   }
        // } else {
        //   wx.showToast({
        //     title: res.showapi_res_error,
        //   })
        // }
        

      }, function (res) {
        wx.showToast({
          title: '加载数据失败',
        })
      }, 'application/json')
  },
  
  toDetails(event) {
    wx.setStorageSync('orderInfo', event.currentTarget.dataset.info)
    wx.navigateTo({
      url: '../details/details',
    })
  }
})