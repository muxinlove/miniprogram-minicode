const app = getApp()

Page({
  data: {
    list: [{
        text: '无限滚动/分页滚动页',
        path: '/pages/infinite-scroll/index'
      },
      {
        text: '多标签页',
        path: '/pages/multiple-tabs/index'
      }
    ]
  },
  routeLink(e) {
    const {
      path
    } = e.target.dataset
    wx.navigateTo({
      url: path
    })
  }
})