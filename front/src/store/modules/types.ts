// local
import { IUserState } from './current_user/types'
import { IPostState } from './post/types'

export interface IState {
  current_user: IUserState,
  posts: IPostState
}