// third party imports
import { all } from 'redux-saga/effects'

// local imports
import current_user_saga from './current_user/sagas'
import post_saga from './post/sagas'


export default function* rootSaga() {
  return yield all([
    current_user_saga,
    post_saga
  ])
}