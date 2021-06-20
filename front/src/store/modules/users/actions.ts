// local imports
import { UserTypes } from "./types"

export const createUser = (data, callback={}) => {
  return {
    type: UserTypes.CREATE_USER,
    payload: data,
    callback
  }
}