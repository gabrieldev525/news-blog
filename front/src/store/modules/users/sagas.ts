// third party
import { AxiosResponse } from 'axios'
import { has } from 'lodash'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

// project
import { api } from '../../../services/api'
import { showErrorMessage } from '../../utils'
import { IUserState } from '../current_user/types'

// local
import { UserTypes } from './types'


function* fetchCurrentUserSaga({ type, payload, callback }) {
  try {
    const response:AxiosResponse<IUserState> = yield call(api.post, 'user-create', {}, payload)

    if (response.status == 201) {
      yield put({
        payload: response.data,
        type: UserTypes.CREATE_USER_SUCCESS
      })

      toast.success('Usuário criado com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch (error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar criar um usuário')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }
}

export default all([
  takeLatest(UserTypes.CREATE_USER, fetchCurrentUserSaga)
])