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

export const fetchPostDetail = (slug, callback={}) => {
  return {
    payload: {
      slug
    },
    type: PostTypes.FETCH_POST_DETAIL,
    callback
  }
}

export const deletePost = (slug, callback={}) => {
  return {
    payload: {
      slug
    },
    type: PostTypes.DELETE_POST,
    callback
  }
}