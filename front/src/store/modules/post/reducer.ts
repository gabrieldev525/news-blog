// third party
import produce from 'immer'
import { Reducer } from 'redux'

// Project
import { state_default } from '../../utils'

// local
import { PostTypes, IPostState } from './types'

const default_state = {
  ...state_default,
  results: []
}

export default (state = default_state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PostTypes.FETCH_POSTS_SUCCESS:
        return action.payload
      default:
        return draft
    }
  })
}