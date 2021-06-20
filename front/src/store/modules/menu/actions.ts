// Local
import { MenuTypes } from './types'


export const fetchMenu = (callback={}) => {
  return {
    type: MenuTypes.FETCH_MENU,
    callback
  }
}
