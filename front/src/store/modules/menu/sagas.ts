// Third party
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { has } from 'lodash'
import { AxiosResponse } from 'axios'

// Project
import { api } from '../../../services/api'
import { showErrorMessage } from '../../utils'

// Local
import { IMenu, MenuTypes } from './types'


function* fetchMenu({ callback, type }) {
  try {
    const response: AxiosResponse<IMenu> = yield call(api.get, 'post-get-menu')

    if(response.status == 200) {
      yield put({
        type: MenuTypes.FETCH_MENU_SUCCESS,
        payload: response.data
      })

      if(typeof(callback) == 'object' && has(callback, 'onfinish'))
        callback.onfinish(response)
    }
  } catch(error) {
    showErrorMessage(error, 'Aconteceu um erro ao tentar buscar as informações do menu')

    if(typeof(callback) == 'object' && has(callback, 'onerror'))
      callback.onerror(error)
  }

  if(typeof(callback) == 'function')
    callback()
}


export default all([
  takeLatest(MenuTypes.FETCH_MENU, fetchMenu)
])