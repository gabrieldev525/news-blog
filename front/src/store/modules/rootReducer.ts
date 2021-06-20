// third party imports
import { combineReducers } from 'redux'

// accounts
import current_user from './current_user/reducer'
import posts from './post/reducer'
import post_detail from './post/reducer-detail'
import categories from './categories/reducer'
import category_detail from './categories/reducer-detail'
import users from './users/reducer'
import user_detail from './users/reducer-detail'
import menu from './menu/reducer'

export default combineReducers({
  current_user,
  posts,
  post_detail,
  categories,
  category_detail,
  users,
  user_detail,
  menu
})