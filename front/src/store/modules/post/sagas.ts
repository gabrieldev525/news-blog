// Third party
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { has } from 'lodash'
import { AxiosResponse } from 'axios'

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


export default all([
  takeLatest(PostTypes.FETCH_POSTS, fetchPosts)
])