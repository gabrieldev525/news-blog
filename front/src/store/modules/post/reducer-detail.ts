// third party
import produce from 'immer'

// local
import { PostTypes } from './types'

const default_state = {
  title: '',
  description: '',
  slug: '',
  id: null,
  created: '',
  modified: '',
  image: ''
}

export default (state = default_state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PostTypes.FETCH_POST_DETAIL_SUCCESS:
        return action.payload
      case PostTypes.EDIT_POST_SUCCESS:
        if(action.payload.slug == state.slug)
          return action.payload
        return state
      default:
        return draft
    }
  })
}