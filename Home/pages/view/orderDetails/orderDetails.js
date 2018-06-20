// pages/view/orderDetails/orderDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 待接单
    isorderwait:true,
    // 已接单
    isorderowner:false,
    orderdetail:{
      "number":123456,
      "servicename":'陪签服务',
      "uesrname":"姓名",
      "phone":15058160060,
      "address":"上海浦东",
      "type_house":"平层",
      "area_house":100,
      "date_service":'2018-01-01',
      "type_renovation":"类型一",
      "remark":'这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注这是备注'
    },
    typelist_renovation:[

    ],
    // 验收节点
    acceptnodes:['验收交底3.0','砌筑巡检3.0'],
    tabs:[
      {
        name:'陪签备忘录',
        list: ['后期可能存在的增项','砌筑巡检3.0','材料工艺项目','施工图纸建议','合同记录']
      },
      {
        name: '数据收集表',
        list: ['后期可能存在的增项', '砌筑巡检3.0']
      },
      {
        name: '基础信息表',
        list: ['后期可能存在的增项', '砌筑巡检3.0']
      }
    ],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  // 切换内容tabs
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  toDetail:function(e){
    console.log('跳转');
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
  // 改变装修类型
  selectrenovationtype(event){}
})