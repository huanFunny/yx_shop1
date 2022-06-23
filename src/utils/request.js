import axios from 'axios';
import { Toast } from 'vant';

let img = require('@/assets/logo.png');
console.log(img)

// 创建 axios 实例
const $axios = axios.create({
  // 要请求接口的基础地址
  baseURL: 'https://api.it120.cc/small4/',
  // 等待时间, 超出这个时间就不等了
  timeout: 3000,
})

// 添加请求拦截器
$axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// Promise 异步请求
// 进行中、resolve():成功、reject() 拒绝、失败
/**
 * setTimeout
 * setInterval
 */

// 添加响应拦截器
$axios.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  if (res.data.code === 600) {
    // 弹出报错信息
    Toast.loading({
      message: res.data.msg,
      forbidClick: true,
    });
  } else if (res.data.code === 0) {
    return Promise.resolve(res.data.data);
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default $axios;

