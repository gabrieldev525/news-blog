// third party
import produce from 'immer'
import { Reducer } from 'redux'

// Project
import { state_default } from '../../utils'

// local
import { CategoryTypes } from './types'

const default_state = {
  ...state_default,
  results: []
}

export default (state = default_state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CategoryTypes.FETCH_CATEGORIES_SUCCESS:
        return action.payload

      case CategoryTypes.CREATE_CATEGORY:
        draft.results.push(action.payload)
        draft.count += 1
        return draft
      default:
        return draft
    }
  })
}