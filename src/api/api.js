import axios from 'axios'
// import { useRouter, useRoute } from 'vue-router'
import router from '@/router/index.ts'


// const router = useRouter()

axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.withCredentials = true //携带cookie 跨域设置头部
axios.defaults.headers.common['Authorization'] =  "Bearer "+localStorage.getItem('access_token');

let lh = ''//本地（打包）
// let lh = 'http://175.178.89.211:7785/'//正式
// let lh='http://47.92.68.4:7000/'//测试 http://vpp.huamod.com/  http://124.220.76.87:8080
// let base =lh+''; //本地
let base = lh + '/admin_apis'; //服务器地址（打包）

//捕获
axios.interceptors.response.use(function (response) {
  // 在接收响应做些什么，例如跳转到登录页
  if (response.data.code == 403) {
    localStorage.removeItem('access_token');
    localStorage.clear();
    router.push({ path: '/login' })
  }
  // else if(response.data.code == 500){
  //   window['$message'].error(response.data.message)
  // }
  return response;
}, function (error) {
  // 对响应错误做点什么 
  if (error.response.data.code == 500) {
    window['$message'].error(error.response.data.message)
  }
  if (error.response.data.code == 5002 && error.response.status == 401) {
    localStorage.removeItem('access_token');
    localStorage.clear();
    router.push({ path: '/login' })
  }
  return Promise.reject(error);
});



//get请求方式
export const ajax_get_data = (path, params) => {
  return axios.get(`${base + path}?${params}`, { headers: { 'Authorization': "Bearer " + localStorage.getItem('access_token') } }).then(res => res.data);
};

//post请求方式
export const ajax_post_data = (path, params) => {
  return axios.post(`${base + path}`, (params), { headers: { 'Authorization': "Bearer " + localStorage.getItem('access_token') } }).then(res => res.data);
};
//post notoken请求方式
export const ajax_post_data_notoken = (path, params) => {
  return axios.post(`${base + path}`, (params)).then(res => res.data);
};

//post请求方式
/* export const ajax_post_data2 = (path, params) => {
  return axios.post(`${base + path}`, qs.stringify(params),{ headers: { 'Authorization': "Bearer "+localStorage.getItem('access_token') } }).then(res => res.data);
}; */
export const ajax_post_data2 = (path, params) => {
  return axios.post(`${base + path}`, (params), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(res => res.data);
};

//login post请求方式
export const ajax_login = (path, params) => {
  return axios.post(`${base + path}`, (params), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(res => res.data);
};

//login post请求方式
export const ajax_post_bef = (path, params) => {
  return axios.post(`${base + path}`, (params)).then(res => res.data);
};

//delete请求方式
export const ajax_delete_data = (path, params) => {
  return axios.delete(`${base + path}?${params}`, { headers: { 'Authorization': "Bearer " + localStorage.getItem('access_token') } }).then(res => res.data);
};

//put请求方式
export const ajax_put_data = (path, params) => {
  return axios.put(`${base + path}`, (params), { headers: { 'Authorization': "Bearer " + localStorage.getItem('access_token') } }).then(res => res.data);
};

//下载
export const ajax_get_download = (path, params) => {
  return axios.get(`${base + path}?${params}`, { headers: { 'Authorization': "Bearer " + localStorage.getItem('access_token') }, responseType: 'blob' }).then(res => res);
};
//下载
export const ajax_post_download = (path, params) => {
  return axios.post(`${base + path}`, (params), { headers: { 'Authorization': "Bearer " + localStorage.getItem('access_token') }, responseType: 'blob' }).then(res => res);
};

//post请求方式 上传
export const ajax_post_updata = (path, params) => {
  return axios.post(`${base + path}`, (params), { headers: { 'Authorization': "Bearer " + localStorage.getItem('access_token'), 'Content-type': 'application/x-www-form-urlencoded' } }).then(res => res.data);
};
