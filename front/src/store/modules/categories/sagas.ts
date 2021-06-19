// Third party
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { has } from 'lodash'
import { AxiosResponse } from 'axios'

// Project
import { api } from '../../../services/api'
import { showErrorMessage } from '../../utils'

// Local
import { CategoryTypes, ICategory, ICategoryState } from './types'


function* fetchCategories({ callback, type, payload }) {
  const { filters } = payload

  try {
    const response: AxiosResponse<ICategoryState> = yield call(api.get, 'category-list', {}, filters)

    if(response.status == 200) {
      yield put({
        type: CategoryTypes.FETCH_CATEGORIES_SUCCESS,
        payload: response.data
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar buscar as categorias')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* fetchCategoryDetail({ callback, type, payload }) {
  const { slug } = payload

  try {
    const response: AxiosResponse<ICategory> = yield call(api.get, 'category-detail', { slug })

    if(response.status == 200) {
      yield put({
        type: CategoryTypes.FETCH_CATEGORY_DETAIL_SUCCESS,
        payload: response.data
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar buscar as informações da categoria')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


export default all([
  takeLatest(CategoryTypes.FETCH_CATEGORIES, fetchCategories),
  takeLatest(CategoryTypes.FETCH_CATEGORY_DETAIL, fetchCategoryDetail)
])