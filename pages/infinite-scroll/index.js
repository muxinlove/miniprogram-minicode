import api from '../../api/index'

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
  onLoad() {
    this._getProductList()
  },
  async _getProductList() {
    const products = await api.getProductList()
    console.log('products', products)
  },
})