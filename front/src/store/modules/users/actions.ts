// local imports
import { UserTypes } from "./types"

export const createUser = (data, callback={}) => {
  return {
    type: UserTypes.CREATE_USER,
    payload: data,
    callback
  }
}

export const fetchUser = (filters={}, callback={}) => {
  return {
    type: UserTypes.FETCH_USERS,
    payload: {
      filters
    },
    callback
  }
}

export const deleteUser = (pk, callback={}) => {
  return {
    type: UserTypes.DELETE_USER,
    payload: {
      pk
    },
    callback
  }
}

export const fetchUserDetail = (pk, callback={}) => {
  return {
    type: UserTypes.FETCH_USER_DETAIL,
    payload: {
      pk
    },
    callback
  }
}

export const editUser = (pk, data, callback={}) => {
  return {
    type: UserTypes.EDIT_USER,
    payload: {
      pk,
      data
    },
    callback
  }
}