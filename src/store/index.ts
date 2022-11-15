import { Commit, createStore } from 'vuex'
import { GlobalDataProps, } from './types'
import axios, { AxiosRequestConfig } from 'axios'
import http from '@/utils/http'

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
    error: {
      status: false
    }
  },
  getters: {

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
    fetchCurrentUser(state, rawDate) {
      console.log('fetchCurrentUser', rawDate, rawDate.code)
      if (rawDate.code) {
        state.user = { 
          isLogin: true,
          ...rawDate.data
        }
        console.log('user', state.user)
      }
    },
    logout(state) {
      state.token = ''
      state.user = { isLogin: false }
      localStorage.removeItem('token')
      delete http.defaults.headers.common.Authorization
    }
  },
  actions: {
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
    // 登录并获取用户信息
    async loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then((res) => {
        console.log('loginAndFetch', res)
        return dispatch('fetchCurrentUser')
      })
    }
  }
})

export default store