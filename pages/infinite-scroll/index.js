import api from "../../api/index";

const App = getApp();

Page({
  data: {
    pagination: {
      page: 0,
      size: 10,
    },
    products: [],
  },
  onLoad() {
    this._getProductList();
  },
  async _getProductList(reset) {
    // let {
    //   pagination: { page, size },
    // } = this.data;
    // if (reset) {
    //   page = 1;
    // }
    // const params = {
    //   page: page++,
    //   size,
    // };
    const data = await api.getProductList();
    console.log("products", data);
    const { products } = this.data;
    this.setData({
      products: [...products, ...data],
    });
  },
  async onBindLoadMore() {
    setTimeout(async () => {
      await this._getProductList();
      App.rss.done("hideScrollLoading");
    }, 1000);
  },
});
