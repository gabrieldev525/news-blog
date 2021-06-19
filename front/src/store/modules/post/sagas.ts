// Third party
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { has } from 'lodash'
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

// Project
import { api } from '../../../services/api'
import { showErrorMessage } from '../../utils'

// Local
import { PostTypes, IPost } from './types'


function* fetchPosts({ callback, type, payload }) {
  const { filters } = payload

  try {
    const response: AxiosResponse<IPost> = yield call(api.get, 'post-list', {}, filters)

    if(response.status == 200) {
      yield put({
        type: PostTypes.FETCH_POSTS_SUCCESS,
        payload: response.data
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar buscar as postagens')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}

function* createPost({ callback, type, payload }) {
  try {
    const response: AxiosResponse<IPost> = yield call(api.post, 'post-list', {}, payload)

    if(response.status == 201) {
      yield put({
        type: PostTypes.CREATE_POST_SUCCESS,
        payload: response.data
      })

      toast.success('Postagem criada com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar criar uma nova postagem')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* fetchPostDetail({ callback, type, payload }) {
  const { slug } = payload

  try {
    const response: AxiosResponse<IPost> = yield call(api.get, 'post-detail', { slug })

    if(response.status == 200) {
      yield put({
        type: PostTypes.FETCH_POST_DETAIL_SUCCESS,
        payload: response.data
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar buscar as informações da postagem')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* deletePost({ callback, type, payload }) {
  const { slug } = payload

  try {
    const response: AxiosResponse<IPost> = yield call(api.delete, 'post-detail', { slug })

    if([200, 202, 204].indexOf(response.status) != -1) {
      yield put({
        type: PostTypes.DELETE_POST_SUCCESS,
        payload: slug
      })

      toast.success('Postagem deletada com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar deletar uma postagem')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


function* editPost({ callback, type, payload }) {
  const { slug, data } = payload

  try {
    const response: AxiosResponse<IPost> = yield call(api.patch, 'post-detail', { slug }, data)

    if(response.status == 200) {
      yield put({
        type: PostTypes.EDIT_POST_SUCCESS,
        payload: data
      })

      toast.success('Postagem editada com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar editar uma postagem')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


export default all([
  takeLatest(PostTypes.FETCH_POSTS, fetchPosts),
  takeLatest(PostTypes.CREATE_POST, createPost),
  takeLatest(PostTypes.FETCH_POST_DETAIL, fetchPostDetail),
  takeLatest(PostTypes.DELETE_POST, deletePost),
  takeLatest(PostTypes.EDIT_POST, editPost),
])