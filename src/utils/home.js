import $axios from "./request";

// 轮播图接口
export const getBannerList = () => $axios.get(`/banner/list`);
// 新闻专题
export const getNewsList = () => $axios.get(`cms/news/list`);
// 商品列表
export const getGoodsList = () => $axios.get(`shop/goods/list`)
// 商品详情
export const getGoodsDetail = (params) => $axios.get(`shop/goods/detail`, { params })

/**
 * $axios({
 *  url: '', // 接口地址
 *  method: '', // 请求方式，get、post、put、delete,
 *  data: data, // 
 *  params: params
 * })
 */