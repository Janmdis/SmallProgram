// pages/orderOwner/orderOwner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      },
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
      },
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
  changeshow:function(e){
    var isshow=null;
    if (e.target.id =='overback'){
      isshow=true;
    } 
    else if (e.target.id =='cancle'){
      isshow = this.data.showcancle ? false : true;
    }
    this.setData({ showcancle: isshow });
  },
  giveupOrder:function(e){

    console.log(e.target);
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

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toDetails(event) {
    console.log(111);
    wx.navigateTo({
      url: '../orderDetails/orderDetails',
    })
  }
})