// third party
import produce from 'immer'
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
      case UserTypes.CREATE_USER_SUCCESS:
        draft.results.push(action.payload)
        draft.count++
        return draft
      default:
        return draft
    }
  })
}

export default current_user