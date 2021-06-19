// local
import { IUserState } from './current_user/types'
import { IPostState } from './post/types'
import { ICategory, ICategoryState } from './categories/types'

export interface IState {
  current_user: IUserState,
  posts: IPostState,
  categories: ICategoryState,
  category_detail: ICategory
}