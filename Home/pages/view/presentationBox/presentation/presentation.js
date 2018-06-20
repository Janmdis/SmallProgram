var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["待服务", "服务中", "已完成", "已放弃"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    inputShowed: false,
    inputVal: "",
    orderdataeList:[
      {orderNumber:'201814815144',
      types:"服务中",
      typedata:"监理服务",
      name:"张三",
      add:"杭州市胜多负少发链接是登陆副科级",
      node:"开工交点3.0",
      nextnode:"验收节点3.0"
      }, {
        orderNumber: '201814815144',
        types: "服务中",
        typedata: "陪迁服务",
        name: "张三",
        add: "杭州市胜多负少发链接是登陆副科级",
        node: "开工交点3.0",
        nextnode: "验收节点3.0"
      },
      {orderNumber: '201814815144',
        types: "服务中",
        typedata: "陪迁服务",
        name: "张三",
        add: "杭州市胜多负少发链接是登陆副科级",
        node: "开工交点3.0",
        nextnode: "验收节点3.0"
      },
      {orderNumber: '201814815144',
        types: "服务中",
        typedata: "陪迁服务",
        name: "张三",
        add: "杭州市胜多负少发链接是登陆副科级",
        node: "开工交点3.0",
        nextnode: "验收节点3.0"
      }
      ]
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 4,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  goassociationReport:function(){
    wx.navigateTo({
      url: '../associationReport/associationReport',
    })
  },
  gopresent: function (val){
    if(val.currentTarget.dataset.type == "陪迁服务"){
      wx.navigateTo({
        url: '../accompany/accompany',
      })
    } else if (val.currentTarget.dataset.type == "监理服务"){
      wx.navigateTo({
        url: '../supervisor/supervisor',
      })
    }
    
  }
});