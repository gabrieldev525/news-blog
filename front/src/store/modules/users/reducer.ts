// third party
import produce from 'immer'
import { findIndex, remove } from 'lodash'
import { Reducer } from 'redux'

// Project
import { state_default } from '../../utils'

// local
import { IUserListState, UserTypes } from './types'

const default_state = {
  ...state_default,
  results: []
}


const current_user: Reducer<IUserListState> = (state = default_state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserTypes.FETCH_USERS_SUCCESS:
        return action.payload
      case UserTypes.CREATE_USER_SUCCESS:
        draft.results.push(action.payload)
        draft.count++
        return draft
      case UserTypes.DELETE_USER_SUCCESS:
        const removedUsers = remove(draft.results, o => o.id == action.payload)
        if(removedUsers)
          draft.count--
        return draft
      case UserTypes.EDIT_USER_SUCCESS:
        const userIdx = findIndex(draft.results, o => o.username == action.payload.username)
        if(userIdx != -1)
          draft.results[userIdx] = action.payload
        return draft
      default:
        return draft
    }
  })
}

export default current_user