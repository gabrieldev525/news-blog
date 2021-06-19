// third party
import produce from 'immer'
import { find, findIndex, remove } from 'lodash'

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
        draft.count++
        return draft
      case PostTypes.DELETE_POST_SUCCESS:
        let removedElement = remove(draft.results, o => o.slug == action.payload)

        if(removedElement)
          draft.count--

        return draft
      case PostTypes.EDIT_POST_SUCCESS:
        let postIdx = findIndex(draft.results, o => o.slug == action.payload.slug)
        if(postIdx)
          draft.results[postIdx] = action.payload
        return draft
      default:
        return draft
    }
  })
}