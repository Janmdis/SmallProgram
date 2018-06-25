// pages/view/orderOwner/reportAccept/reportAccept.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist: [
      {
        src: '../../../images/ok.png'
      },
      {
        src: '../../../images/ok.png'
      },
      {
        src: '../../../images/ok.png'
      },
      {
        src: '../../../images/ok.png'
      },
      {
        src: '../../../images/ok.png'
      },
      {
        src: '../../../images/ok.png'
      },
      {
        src: '../../../images/ok.png'
      }
    ],
    tabs: [
      {
        name: '合格',
        list: ['检测说明', '解决方案', '施工隐患', '解决方法']
      },
      {
        name: '不合格',
        list: ['检测说明', '解决方案', '施工隐患', '解决方法']
      }
    ],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
  },
  // 切换内容tabs
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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