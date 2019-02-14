import { ClassicModel} from "../../models/classic.js"
/*
    实例化对象
*/
let classic=  new ClassicModel();
// pages/classic/classic.js
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
    /*封装前*/
    //   wx.request({
    //       url: 'http://bl.7yue.pro/v1/classic/latest',
    //       header:{
    //           appkey:'4hjM1xdf3CqJFjeK'
    //       },
    //       success:(respose)=>{
    //           console.log(respose)
    //       }
    //   })

    /*封装后*/
    // http.request({
    //     url:"classic/latest",
    //     success: (response)=>{
    //         console.log(response)
    //     }
    // })

    /*剥夺函数return的能力*/
    let latest = calssic.getLatest((res)=>{
        
    })


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