import axios from 'axios';

// 一般数据
export const instance = axios.create({
    baseURL: 'http://192.168.0.18:7000',
    timeout: 600000,
    changeOrigin: true,
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

// form-data格式数据（图片）
export const Imginstance = axios.create({
    baseURL: 'http://192.168.0.18:7000',
    timeout: 600000,
    changeOrigin: true,
    headers: {'Content-Type': 'application/json', 'Content-Encoding': 'identity'}
});


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = [function (data) {
//     let ret = '';
//     for (let it in data) {
//         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//     }
//     return ret
// }];

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});




