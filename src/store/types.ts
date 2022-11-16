
// export interface ImageProps {
//   _id?: string
//   url?: string
// }

export interface UserProps {
  isLogin: boolean
  nickname?: string
  _id?: string
  column?: string
  email?: string
  avatar?: string
  description?: string
}

export interface ResponseType< P = Record<string, unknown>> {
  code: number
  msg: string
  data: P
}

export interface ColumnProps {
  _id: string
  title?: string
  img_url?:  string
  description?: string
}

export interface PostProps {
  _id?: string
  title: string
  excerpt?: string
  content?: string
  image?: string
  createdAt?: string
  column?: string
  author?: string | UserProps
  isHTML?: boolean
}


export interface GlobalErrorProps {
  status: boolean
  message?: string
}

interface ListProps<P> {
  [id: string]: P
}

export interface GlobalDataProps {
  token: string
  user: UserProps
  loading: boolean

  // columns: {
  //   data: ListProps<ColumnProps>
  // }

  columns: ColumnProps[]

  posts: {
    data: ListProps<PostProps>
  }


  error: GlobalErrorProps
}