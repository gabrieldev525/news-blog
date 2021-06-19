// third party imports
import { combineReducers } from 'redux'

// accounts
import current_user from './current_user/reducer'
import posts from './post/reducer'

export default combineReducers({
  current_user,
  posts
})