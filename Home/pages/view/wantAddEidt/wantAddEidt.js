// pages/view/presentationBox/wantAdd/wantAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioItems: [
      { name: 'cell standard', value: '0', checked: true },
      { name: 'cell standard', value: '1'},
      { name: 'cell standard', value: '2' }
    ],
    radioItemsa: [
      { name: 'cell standard', value: '0', checked: true },
      { name: 'cell standard', value: '1' },
      { name: 'cell standard', value: '2' }
    ],
    checkboxItems: [
      { name: '1.1是否存在中央空调6平方外机线或者4平方内机线增项；', value: '0', checked: true },
      { name: '1.2水电工程是否包含水电打孔？', value: '1' },
      { name: '1.3空开漏保以及弱电模块是否自理；', value: '2' },
      { name: '1.4是否有厨卫4平方线单独增加费用；', value: '4' },
      { name: '1.5是否有强弱电箱移位或者安装费用？此外若有移位注意进线是否需要另接/更换；', value: '5' }
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