import { Commit, createStore } from 'vuex'
import { GlobalDataProps, } from './types'
import { AxiosRequestConfig } from 'axios'
import http from '@/utils/http'
import { objToArr, arrToObj } from '@/utils/hepler'
import { stat } from 'fs'

const asyncAndCommit = async(
  url: string,
  mutationName: string,
  commit: Commit,
  config: AxiosRequestConfig = { method: 'get' },
  extraData?: any
) => {

  return http(url, config).then((data) => {
    if (extraData) {
      commit(mutationName, { data, extraData })
    } else {
      commit(mutationName, data)
    }
    return data
  }) 
}


const store = createStore<GlobalDataProps>({
  state: {
    token: localStorage.getItem('token') || '',
    loading: false,
    user: { isLogin: false },
    columns: { data: {}, isLoaded: false, total: 0 },
    // columns: [],
    posts: { data: {}, isLoaded: false, total: 0, loadedColumns: []},
    error: {
      status: false
    }
  },
  getters: {
    getColumns: (state) =>{
      return objToArr(state.columns.data)
    },
    getColumnById: (state) => (id: string) => {
      return state.columns.data[id]
    },
    getPosts: (state) =>{
      return objToArr(state.posts.data)
    },
    getPostsByCid: (state) => (cid: string) => {
      return objToArr(state.posts.data).filter(post => post.column_id === cid)
    },
    getCurrentPost: (state) => (id: string) => {
      return state.posts.data[id]
    }
  },
  mutations: {
    setLoading(state, status){
      state.loading = status
    },
    login(state, rawData) {
      const { token } = rawData.data
      console.log('login token raw', token, rawData)
      if (rawData.code) {
        state.token = token
        localStorage.setItem('token', token)
        http.defaults.headers.common.Authorization = `Bearer ${token}`
      }
    },
    fetchCurrentUser(state, rawData) {
      console.log('fetchCurrentUser', rawData, rawData.code)
      if (rawData.code) {
        state.user = { 
          isLogin: true,
          ...rawData.data
        }
        console.log('user', state.user)
      }
    },
    logout(state) {
      state.token = ''
      state.user = { isLogin: false }
      localStorage.removeItem('token')
      delete http.defaults.headers.common.Authorization
    },
    //Home
    fetchColumns(state, rawData) {
      const { data } = state.columns
      const { list, count } = rawData.data
      
      state.columns = {
        data: {...data, ...arrToObj(list) },
        total: count,
        isLoaded: true
      }
    },
    //column detail
    fetchColumn(state, rawData) {
      state.columns.data[rawData.data._id] = rawData.data
      console.log('fetchColumn',state.columns.data[rawData.data._id])
    },
    // column detail
    fetchPosts(state, rawData) {
      const { data } = state.posts
      const { list, count } = rawData.data

      state.posts = {
        data: {...data, ...arrToObj(list)},
        total: count,
        isLoaded: true,
        loadedColumns: []
      }
    }
    // fetchPosts(state, { data: rawData, extraData: column_id}) {
    //   // state.posts.data = { 
    //   //   ...state.posts.data, 
    //   //   ...arrToObj(rawData.data.list) 
    //   // }
    //   // state.posts.loadedColumns.push(column_id)
    // }
  },
  actions: {
    // 登录并获取用户信息
    async loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then((res) => {
        console.log('loginAndFetch', res)
        return dispatch('fetchCurrentUser')
      })
    },
    fetchCurrentUser({ commit }) {
      return asyncAndCommit('/api/user/current', 'fetchCurrentUser', commit, {
        method: 'post'
      })
    },
    login({ commit }, payload) {
      return asyncAndCommit('/api/user/login', 'login', commit, {
        method: 'post',
        data: payload
      })
    },
    // Home获取所有专栏
    fetchColumns({ state, commit}, params = {}) {
      const { currentPage = 1, pageSize = 3} = params
      return asyncAndCommit(`/api/column/page?currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchColumns', commit)
    },
    fetchColumn({ state, commit }, cid) {
      if (!state.columns.data[cid]) {
        return asyncAndCommit(`/api/column/detail?id=${cid}`, 'fetchColumn', commit)
      }
    },
    fetchPosts({ state, commit }, params = {}) {
      const {currendId, currentPage = 1, pageSize = 3} = params
      // console.log('param', params)
      // console.log('fetchPosts', currendId, currentPage, pageSize)
      // if (!state.posts.loadedColumns.includes(cid)) {
        return asyncAndCommit(`api/post/page?cid=${currendId}&currentPage=${currentPage}&pageSize=${pageSize}`, 'fetchPosts', commit)
      // }
    }
  }
})
// http://localhost:8081/api/post/page?cid=1&currentPage=1&pageSize=2
export default store