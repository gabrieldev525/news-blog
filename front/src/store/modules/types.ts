// local
import { IUserState } from './current_user/types'
import { IPost, IPostState } from './post/types'
import { ICategory, ICategoryState } from './categories/types'

export interface IState {
  current_user: IUserState,
  posts: IPostState,
  post_detail: IPost,
  categories: ICategoryState,
  category_detail: ICategory
}