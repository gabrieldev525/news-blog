// third party
import produce from 'immer'

// local
import { MenuTypes } from './types'

export default (state = {}, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case MenuTypes.FETCH_MENU_SUCCESS:
        return action.payload
      default:
        return draft
    }
  })
}