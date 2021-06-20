// third party
import { AxiosResponse } from 'axios'
import { has } from 'lodash'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

// project
import { api } from '../../../services/api'
import { showErrorMessage } from '../../utils'
import { IUserList, IUserState } from '../current_user/types'

// local
import { UserTypes } from './types'


function* createUser({ type, payload, callback }) {
  try {
    const response:AxiosResponse<IUserState> = yield call(api.post, 'users-list', {}, payload)

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

function* fetchUserList({ type, payload, callback }) {
  const { filters } = payload

  try {
    const response:AxiosResponse<IUserList> = yield call(api.get, 'users-list', {}, filters)

    if (response.status == 200) {
      yield put({
        payload: response.data,
        type: UserTypes.FETCH_USERS_SUCCESS
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch (error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar listar os usuário')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }
}


function* deleteUser({ type, payload, callback }) {
  const { pk } = payload

  try {
    const response:AxiosResponse<IUserList> = yield call(api.delete, 'users-detail', { pk })

    if ([200, 202, 204].indexOf(response.status) != -1) {
      yield put({
        payload: pk,
        type: UserTypes.DELETE_USER_SUCCESS
      })

      toast.success('Usuario deletado com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch (error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar deletar um usuário')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }
}


function* fetchUserDetail({ type, payload, callback }) {
  const { pk } = payload

  try {
    const response:AxiosResponse<IUserState> = yield call(api.get, 'users-detail', { pk })

    if (response.status == 200) {
      yield put({
        payload: response.data,
        type: UserTypes.FETCH_USER_DETAIL_SUCCESS
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch (error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar buscar as informações do usuário')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }
}


function* editUser({ type, payload, callback }) {
  const { pk, data } = payload

  try {
    const response:AxiosResponse<IUserState> = yield call(api.patch, 'users-detail', { pk }, data)

    if (response.status == 200) {
      yield put({
        payload: response.data,
        type: UserTypes.EDIT_USER_SUCCESS
      })

      toast.success('Usuário editado com sucesso')

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch (error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar editar as informações do usuário')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }
}


export default all([
  takeLatest(UserTypes.CREATE_USER, createUser),
  takeLatest(UserTypes.FETCH_USERS, fetchUserList),
  takeLatest(UserTypes.DELETE_USER, deleteUser),
  takeLatest(UserTypes.FETCH_USER_DETAIL, fetchUserDetail),
  takeLatest(UserTypes.EDIT_USER, editUser),
])