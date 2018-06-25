// pages/view/presentationBox/wantAdd/wantAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [
      { name: 'cell standard', value: '0', checked: true },
      { name: 'cell standard', value: '1' },
      { name: 'cell standard', value: '2' }
    ],
    radioItemsa: [
      { name: 'cell standard', value: '0', checked: true },
      { name: 'cell standard', value: '1' },
      { name: 'cell standard', value: '2' }
    ],
    checkboxItems: [
      { name: '原始尺寸图', value: '0', checked: true },
      { name: '拆除平面图', value: '1' },
      { name: '砌墙平面图', value: '2' },
      { name: '平面布置图', value: '3' },
      { name: '平面尺寸图', value: '4' },
      { name: '家具尺寸图', value: '5' },
      { name: '吊顶布置图', value: '6' },
      { name: '吊顶尺寸图', value: '7' },
      { name: '灯位尺寸图', value: '8' },
      { name: '插座布置图', value: '9' },
      { name: '弱电布置图', value: '10' },
      { name: '空调系统图', value: '11' },
      { name: '开关布置图', value: '12' },
      { name: '配电系统图', value: '13' },
      { name: '水管布置图', value: '14' },
      { name: '地面铺贴图', value: '15' },
      { name: '立面索引图', value: '16' },
      { name: '各立面展开图', value: '17' },
      { name: '各节点详图', value: '18' },
      { name: '效果图（VR/草图）', value: '19' }
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
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  radioChanges: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItemsa = this.data.radioItemsa;
    for (var i = 0, len = radioItemsa.length; i < len; ++i) {
      radioItemsa[i].checked = radioItemsa[i].value == e.detail.value;
    }

    this.setData({
      radioItemsa: radioItemsa
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

  }
})