// third party
import produce from 'immer'
import { Reducer } from 'redux'

// Project
import { state_default } from '../../utils'

// local
import { PostTypes } from './types'

const default_state = {
  ...state_default,
  results: []
}

export default (state = default_state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PostTypes.FETCH_POSTS_SUCCESS:
        return action.payload
      case PostTypes.CREATE_POST_SUCCESS:
        draft.results.push(action.payload)
        draft.count += 1
        return draft
      default:
        return draft
    }
  })
}