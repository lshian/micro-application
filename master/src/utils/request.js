import Axios from 'axios';
import qs from 'qs';

const http = Axios.create({
  baseURL: process.env.API_ROOT, // 后台服务地址
  timeout: 15000, // 请求超时时间15s
  withCredentials: false, // 是否允许带cookie这些
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
});

http.interceptors.request.use((config) => {
  // 发送请求前进行拦截
  // 可在此处配置请求头信息
  // config.headers['appkey'] = ''
  // config.headers['token'] = ''
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

http.interceptors.response.use((res) => {
  // 请求响应后拦截
  if (res.status === 200) { // 对响应数据做些事
    return Promise.resolve(res.data);
  }
  return res.data;
}, (error) => {
  // Dialog({message: error}) // 404等问题可以在这里处理
  return Promise.reject(error);
});

export const get = function (api, params) {
  return http.get(api, {params})
}

export const post = function (api, params) {
  return http.post(api, {params})
}

export default http;
