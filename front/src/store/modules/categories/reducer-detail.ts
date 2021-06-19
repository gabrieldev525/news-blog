// third party
import produce from 'immer'

// Project
import { state_default } from '../../utils'

// local
import { CategoryTypes } from './types'

const default_state = {
  id: null,
  title: '',
  description: '',
  slug: '',
  created: '',
  modified: ''
}

export default (state = default_state, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CategoryTypes.FETCH_CATEGORY_DETAIL_SUCCESS:
        return action.payload
      default:
        return draft
    }
  })
}