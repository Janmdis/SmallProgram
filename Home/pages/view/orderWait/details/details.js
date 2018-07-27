// pages/view/orderDetails/orderDetails.js
// pages/orderOwner/orderOwner.js
var network = require("../../../../utils/network.js");
var utilBox = require("../../../../utils/utilBox.js");
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
    let info = wx.getStorageSync('orderInfo');
   
    console.log(info.id)
    network.requestLoading(
      utilBox.urlheader + `public/entryreport/queryMapByProjectIds`,
      [info.id], "",
      function (res) {
        console.log(res)
        let resMessage = res.info
        if (res.status == 200) {
        }
      }, function (res) {
        wx.showToast({
          title: '加载数据失败',
        })
      }, 'application/json');

    if (info.orderDetail){
      this.setData({
        orderdetail: {
          address: info.orderDetail.detailAddress,
          number: info.orderInfo.number,
          phone: info.orderDetail.phone,
          servicename: info.orderDetail.categoryName,
          type_house: info.commodityCategory.name,
          uesrname: info.name,
          remark: info.remarks!=null ? info.remarks:"",
          "area_house": info.acreage,
        }
      })
    }
  },
  upDateinfo:function(){
    let info = wx.getStorageSync('orderInfo');
    let userInfo = wx.getStorageSync('userInfo');
    let worklists = wx.getStorageSync('worklists');
    console.log()
    network.requestLoading(
      utilBox.urlheader + `product/workList/update`,
      {
        id: worklists[0].id,
        isAccepted:1
      }, "",
      function (res) {
        console.log(res)
        let resMessage = res.info
        if (res.msg == "修改") {
          wx.showToast({
            title: '添加成功',
          })
          setTimeout(() => {
            wx.switchTab({
              url: '../../orderWait/list/list',
            })
          }, 2000)
        }
      }, function (res) {
        wx.showToast({
          title: '加载数据失败',
        })
      }, 'application/json');
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