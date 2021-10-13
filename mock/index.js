// 引入基于小程序的wxmock
const Mock = require("../utils/WxMock.js");

/**
 * 获取商品列表
 */
let page = 0;
let size = 10;
let title = "标题";
let desc = "这是描述";
let products = Mock.mock("/mock/api/product/list", function (options) {
  page++;
  const data = [];
  for (let i = 0; i < size; i++) {
    const id = (page - 1) * size + i + 1;
    const baseItem = {
      id,
      title: `${title}-${id}`,
      desc: `${desc}-${id}`,
    };
    data.push(baseItem);
  }

  return {
    resultCode: "1",
    message: "success",
    data,
  };
});

export default {
  products,
};
