
export interface ImageProps {
  _id?: string
  url?: string
  createdAt?: string
}

export interface UserProps {
  isLogin: boolean
  nickname?: string
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