import store from '@/store'
import axios from 'axios'
import { appendFileSync } from 'fs'

// 替换 baseURL
// axios.defaults.baseURL = 'http://apis.imooc.com/api/'

const http = axios.create({
  // baseURL: 'http://127.0.0.1:4523/m1/1917662-0-default',
  baseURL: 'http://127.0.0.1:8081/',
  timeout: 10 * 1000
})


http.interceptors.request.use((config) => {
  store.commit('setLoading', true)
  // store.commit('setError', { status: false, message: ''})

  // config.params = { ...config.params, icode: 'C87ECC937237230A' }

  // // 如果是上传文件，添加到 FormData 中
  // if (config.data instanceof FormData) {
  //   config.data.append('icode', 'C87ECC937237230A')
  // } else {
  //   // 普通的 body 对象，添加到 data 中
  //   config.data = { ...config.data, icode: 'C87ECC937237230A' }
  // }




  return config
})

http.interceptors.response.use((response) => {
  store.commit('setLoading', false)
  return response.data
}, (e) => {
  const { error } = e.response.data
  // store.commit('setError', { status: true, message: error })
  store.commit('setLoading', false)
  return Promise.reject(error)
})


export default http