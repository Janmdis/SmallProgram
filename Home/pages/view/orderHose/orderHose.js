// pages/view/decorate/decorate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commpontName: "圣都装饰城西分公司",
    signDate: '2018-02-10',
    dectype: "欧式",
    household: '三室一厅一卫',
    measure: '132㎡',
    offer: '14万',
    Design: '1万',
    Administration: '10%',
    direct: '1万',
    project: '1万',
    countryCodes: ["+86", "+80", "+84", "+87"],
    checkboxItems: [
      { name: '平层公寓', value: '0', checked: true },
      { name: '复式、LOFT', value: '1' },
      { name: '排屋、别墅', value: '2' }
    ],
    checkboxItem: [
      { name: '全包', value: '0', checked: true },
      { name: '半包', value: '1' },
      { name: '清场', value: '2' },
      { name: '整装', value: '3' },
      { name: '半包+部分主', value: '4' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
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
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
})