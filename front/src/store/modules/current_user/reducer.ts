// third party imports
import { Reducer } from 'redux'
import produce from 'immer'

// Project
import { UserTypes as UsersTypes } from '../users/types'

// local imports
import { IUserState, UserTypes } from './types'

const STATE_DEFAULT:IUserState = null

const current_user:Reducer<IUserState> = (state = STATE_DEFAULT, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserTypes.FETCH_CURRENT_USER_SUCCESS:
        return action.payload
      case UsersTypes.EDIT_USER_SUCCESS:
        if(action.payload.username == state?.username)
          draft = action.payload
        return draft
      default:
        return draft
    }
  })
}

export default current_user