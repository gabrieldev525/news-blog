// third party imports
import { all } from 'redux-saga/effects'

// local imports
import current_user_saga from './current_user/sagas'
import post_saga from './post/sagas'
import category_saga from './categories/sagas'
import user_saga from './users/sagas'
import menu_saga from './menu/sagas'


export default function* rootSaga() {
  return yield all([
    current_user_saga,
    post_saga,
    category_saga,
    user_saga,
    menu_saga
  ])
}