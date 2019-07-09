// pages/page/newRecipients/newRecipients.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myname: '',
    myphone: '',
    myadd: '',
    mydetail: '',
    region: []
  },
  
  save(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },

  // 获取姓名
  getname(e) {
    this.myname = e.detail.value
    console.log(this.myname)
  },
  // 获取手机号码
  getphone(e) {
    this.myphone = e.detail.value
    console.log(this.myphone)
  },
  // 获取区域
  getaddress(e) {
    this.myadd = e.detail.value
    console.log(this.myadd)
  },
  // 获取详细地址
  getdetails(e) {
    this.mydetail = e.detail.value
    console.log(this.mydetail)
  },

  // 进入收件人地址簿
  goDirection(){
    wx.navigateTo({
      url: '/pages/page/direction/direction',
    })
  },

  // 地址选择
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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