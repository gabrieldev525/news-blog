// Local
import { CategoryTypes } from './types'

export const fetchCategories = (filters={}) => {
  return {
    payload: {
      filters
    },
    type: CategoryTypes.FETCH_CATEGORIES
  }
}

export const fetchCategoryDetail = (slug) => {
  return {
    payload: {
      slug
    },
    type: CategoryTypes.FETCH_CATEGORY_DETAIL
  }
}