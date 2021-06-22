// third party
import produce from 'immer'
import { Reducer } from 'redux'

// Project
import { IUserState } from '../current_user/types'

// local
import { UserTypes } from './types'



const user_detail: Reducer<IUserState> = (state = {}, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserTypes.FETCH_USER_DETAIL_SUCCESS:
        return action.payload
      case UserTypes.CLEAR_USER:
        return {}
      default:
        return draft
    }
  })
}

export default user_detail