// Third party
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { has } from 'lodash'
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

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

function* createCategory({ callback, type, payload }) {
  try {
    const response: AxiosResponse<ICategory> = yield call(api.post, 'category-list', {}, payload)

    if(response.status == 201) {
      yield put({
        type: CategoryTypes.CREATE_CATEGORY_SUCCESS,
        payload: response.data
      })

      toast.success('Categoria criada com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar criar uma nova categoria')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* deleteCategory({ callback, type, payload }) {
  const { slug } = payload

  try {
    const response: AxiosResponse<ICategory> = yield call(api.delete, 'category-detail', { slug })

    if([200, 202, 204].indexOf(response.status) != -1) {
      yield put({
        type: CategoryTypes.DELETE_CATEGORY_SUCCESS,
        payload: slug
      })

      toast.success('Categoria deletada com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar deletar uma categoria')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* editCategory({ callback, type, payload }) {
  const { slug, data } = payload

  try {
    const response: AxiosResponse<ICategory> = yield call(api.patch, 'category-detail', { slug }, data)

    if(response.status == 200) {
      yield put({
        type: CategoryTypes.EDIT_CATEGORY_SUCCESS,
        payload: data
      })

      toast.success('Categoria editada com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar editar uma categoria')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


export default all([
  takeLatest(CategoryTypes.FETCH_CATEGORIES, fetchCategories),
  takeLatest(CategoryTypes.FETCH_CATEGORY_DETAIL, fetchCategoryDetail),
  takeLatest(CategoryTypes.CREATE_CATEGORY, createCategory),
  takeLatest(CategoryTypes.DELETE_CATEGORY, deleteCategory),
  takeLatest(CategoryTypes.EDIT_CATEGORY, editCategory),
])