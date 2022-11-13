import axios from 'axios'

const http = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/1917662-0-default',
  timeout: 10 * 1000
})


export default http