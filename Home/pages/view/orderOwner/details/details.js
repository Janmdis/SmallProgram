// pages/view/orderDetails/orderDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 陪签服务类型
    ispq:false,
    // 监理服务
    isjl:true,
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
    // 装修风格
    typelist_renovation: ["风格一", "风格二","风格三"],
    renovationIndex:0,
    // 当前节点
    nodes_current:["节点一","节点二","节点三"],
    nodescurrentIndex:0,
    date_currentnode:'',
    // 下个节点
    nodes_next: ["节点一", "节点二", "节点三"],
    nodesnextIndex: 0,
    date_nextnode: '',
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
    sliderLeft: 0,
    showcancle: true
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
  changeshow: function (e) {
    var isshow = null;
    if (e.target.id == 'overback') {
      isshow = true;
    }
    else if (e.target.id == 'cancle') {
      isshow = this.data.showcancle ? false : true;
    }
    this.setData({ showcancle: isshow });
  },
  giveupOrder: function (e) {

    console.log(e.target);
  },
  // 选择装修类型
  bindPickerChange:function(e){
    this.setData({
      renovationIndex: e.detail.value
    })
  }, 
  // 选择当前节点
  bindPickerChange_currentnode:function(e) {
    this.setData({
      nodescurrentIndex: e.detail.value
    })
  },
  // 选择当前节点时间
  bindDatechange_currentnode: function (e) {
    this.setData({
      date_currentnode: e.detail.value
    })
  },
  // 选择下一个节点
  bindPickerChange_nextnode:function(e){
    this.setData({
      nodesnextIndex: e.detail.value
    })
  },
  // 选择下一个节点时间
  bindDatechange_nextnode:function(e){
    this.setData({
      date_nextnode: e.detail.value
    })
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
  
  }
})