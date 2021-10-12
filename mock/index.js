 // 引入基于小程序的wxmock
 var Mock = require('../utils/WxMock.js')

 /**
  * 获取商品列表
  */
 var products = Mock.mock('/mock/api/product/list', {
     "resultCode": "1",
     "message": "success",
     "data": [{
             "id": 1001,
             "name": "文章标题",
             "content": "文章内容"
         },
         {
             "id": 1002,
             "name": "文章标题222",
             "content": "文章内容222"
         }
     ]
 })

 export default {
     products
 }