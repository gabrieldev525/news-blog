// third party imports
import { combineReducers } from 'redux'

// accounts
import current_user from './current_user/reducer'
import posts from './post/reducer'
import categories from './categories/reducer'
import category_detail from './categories/reducer-detail'

export default combineReducers({
  current_user,
  posts,
  categories,
  category_detail
})