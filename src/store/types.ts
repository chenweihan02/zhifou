
export interface ResponseType< P = Record<string, unknown>> {
  code: number
  msg: string
  data: P
}

export interface UserProps {
  isLogin: boolean
  nickname?: string
  _id?: string
  column_id?: string
  email?: string
  avatar?: string
  description?: string
}

export interface ColumnProps {
  _id: string
  title?: string
  img_url?:  string
  description?: string
}

export interface PostProps {
  _id?: string
  author_id: string
  column_id: string
  title: string
  excerpt?: string
  content?: string
  img_url?: string
  created_time?: string
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

  columns: {
    data: ListProps<ColumnProps>
    isLoaded: boolean
    total: number
  }

  posts: {
    data: ListProps<PostProps>
    isLoaded: boolean
    total: number
    loadedColumns: string[]
  }

  error: GlobalErrorProps
}