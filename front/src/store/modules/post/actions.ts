// Local
import { PostTypes } from './types'

export const fetchPosts = (filters={}, callback={}) => {
  return {
    payload: {
      filters
    },
    type: PostTypes.FETCH_POSTS,
    callback
  }
}

export const createPost = (data, callback={}) => {
  return {
    payload: data,
    type: PostTypes.CREATE_POST,
    callback
  }
}