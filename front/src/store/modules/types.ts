// local
import { IUserList, IUserState } from './current_user/types'
import { IPost, IPostState } from './post/types'
import { ICategory, ICategoryState } from './categories/types'
import { IMenu } from './menu/types'

export interface IState {
  current_user: IUserState,
  posts: IPostState,
  post_detail: IPost,
  categories: ICategoryState,
  category_detail: ICategory,
  menu: IMenu,
  users: IUserList,
  user_detail: IUserState
}