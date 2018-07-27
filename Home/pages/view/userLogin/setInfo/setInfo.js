// pages/quickLogon/quickLogon.js

var utilBox = require("../../../../utils/utilBox.js");
var network = require("../../../../utils/network.js");
Page({
  data: {
    productInfo: {}
  },
  goPerfect: () => {
    wx.navigateTo({
      url: '../perfectUser/perfectUser',
    })
  },
  //添加Banner  
  bindChooiceProduct: function () {
    var that = this;
    
    wx.chooseImage({
      count: 1,  //最多可以选择的图片总数  
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        //启动上传等待中...  
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 10000
        })
        var uploadImgCount = 0;
        for (var i = 0, h = tempFilePaths.length; i < h; i++) {
          wx.uploadFile({
            url: utilBox.urlheader + 'zuul/sms/file/fileUpload?' + "type=admin",
            filePath: tempFilePaths[i],
            fileUpload: tempFilePaths[i],
            name: 'fileUpload',
            formData: {
              'imgIndex': i
            },
            header: {
              "Content-Type": "multipart/form-data",
              'Cookie': utilBox.cookie
            },
            success: function (res) {
              
              uploadImgCount++;
              var data = JSON.parse(res.data);
              //服务器返回格式: { "Catalog": "testFolder", "FileName": "1.jpg", "Url": "https://test.com/1.jpg" }  
              var productInfo = that.data.productInfo;
              if (productInfo.bannerInfo == null) {
                productInfo.bannerInfo = [];
              }
              console.log(data.info)
              productInfo.bannerInfo=[{
                "url": utilBox.urlheader+data.info
              }];
              that.setData({
                productInfo: productInfo
              });
              console.log(productInfo.bannerInfo[0].url)

              //如果是最后一张,则隐藏等待中  
              if (uploadImgCount == tempFilePaths.length) {
                wx.hideToast();
              }
            },
            fail: function (res) {
              wx.hideToast();
              wx.showModal({
                title: '错误提示',
                content: '上传图片失败',
                showCancel: false,
                success: function (res) { }
              })
            },
            
          });
        }
      }
    });
  },
  loginOut:function(){
    network.requestLoading(
      utilBox.urlheader + "public/logout", {},
      "登录中请稍等...",
      function(res){
        if(res.status==200){
          wx.navigateTo({
            url: '../login/login',
          })
          wx.clearStorageSync("userInfo");
        }else{
          wx.showToast({
            title: 'res.info',
          })
        }
      },
      function(res){},"get")
  }
})