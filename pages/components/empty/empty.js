// pages/components/empty/empty.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goToOrder(){
      wx.navigateTo({
        url: '/pages/page/delivery/delivery'
      })
    }
  }
})
