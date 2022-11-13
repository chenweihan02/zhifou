import { Commit, createStore } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
import http from '@/utils/http'

export interface ImageProps {
  _id?: string
  url?: string
  createdAt?: string
}

export interface UserProps {
  isLogin: boolean
  nickName?: string
  _id?: string
  column?: string
  email?: string
  avatar?: ImageProps
  description?: string
}

export interface ResponseType< P = Record<string, unknown>> {
  code: number
  msg: string
  data: P
}

export interface ColumnProps {
  _id: string
  title: string
  avatar?: ImageProps
  description: string
  author: string
}

export interface GlobalErrorProps {
  status: boolean
  message?: string
}

export interface GlobalDataProps {
  token: string
  user: UserProps
  loading: boolean
  error: GlobalErrorProps
}

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
    token: '',
    loading: false,
    user: { isLogin: false },
    error: {
      status: false
    }
  },
  getters: {

  },
  mutations: {
    login(state, rawData) {
      const { token } = rawData.data
      state.token = token
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    fetchCurrentUser(state, rawDate) {
      state.user = { 
        isLogin: true,
        // nickName: rawDate.data.data.nickName
        ...rawDate.data.data
      }
      console.log('raw', state.user)
    }
  },
  actions: {
    fetchCurrentUser({ commit }) {
      return asyncAndCommit('/api/user/current', 'fetchCurrentUser', commit)
    },
    login({ commit }, payload) {
      return asyncAndCommit('/api/user/login', 'login', commit, {
        method: 'post',
        data: payload
      })
    },
    // 登录并获取用户信息
    loginAndFetch({ dispatch }, payload) {
      return dispatch('login', payload).then(() => {
        return dispatch('fetchCurrentUser')
      })
    }
  }
})

export default store