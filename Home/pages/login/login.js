// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  quickLogon:()=>{
    wx.navigateTo({
      url:'../quickLogon/quickLogon'
    })
  },
  missCipher: () => {
    wx.navigateTo({
      url: '../missCipher/missCipher',
    })
  }


 


  
<<<<<<< HEAD
  },
  // 登录
  login:function(){
    console.log('登录');
    wx.redirectTo({
      url: '../order_owner/order_owner',
    })
    console.log('结束');
  }
=======
>>>>>>> 2724f4c2eb42009faa00500def3b87db2f9ecd26
})