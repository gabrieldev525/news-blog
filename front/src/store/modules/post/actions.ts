// Local
import { PostTypes } from './types'

export const fetchPosts = (filters={}) => {
  return {
    payload: {
      filters
    },
    type: PostTypes.FETCH_POSTS
  }
}