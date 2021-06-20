// third party
import produce from 'immer'
import { findIndex, remove } from 'lodash'
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

      case CategoryTypes.CREATE_CATEGORY_SUCCESS:
        draft.results.push(action.payload)
        draft.count++
        return draft

      case CategoryTypes.EDIT_CATEGORY_SUCCESS:
        const categoryIdx = findIndex(draft.results, o => o.slug == action.payload.slug)
        if(categoryIdx)
          draft.results[categoryIdx] = action.payload
        return draft

      case CategoryTypes.DELETE_CATEGORY_SUCCESS:
        let categoryRemoved = remove(draft.results, o => o.slug == action.payload)

        if(categoryRemoved)
          draft.count--

        return draft
      default:
        return draft
    }
  })
}