// Local
import { CategoryTypes, ICategory } from './types'

export const fetchCategories = (filters={}, callback={}) => {
  return {
    payload: {
      filters
    },
    type: CategoryTypes.FETCH_CATEGORIES,
    callback
  }
}

export const fetchCategoryDetail = (slug, callback={}) => {
  return {
    payload: {
      slug
    },
    type: CategoryTypes.FETCH_CATEGORY_DETAIL,
    callback
  }
}

export const createCategory = (data: ICategory, callback={}) => {
  return {
    payload: data,
    type: CategoryTypes.CREATE_CATEGORY,
    callback
  }
}