// 商品相关
const getProductList = async (params) => {
    const {
        data,
        resultCode
    } = await wx.$request({
        method: 'GET',
        url: '/mock/api/product/list',
        data: params
    })
    if (resultCode === '1') {
        return data
    }
    return null
}

export default {
    getProductList
}