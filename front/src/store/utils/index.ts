// Third party
import { forEach, has } from 'lodash'
import { toast } from 'react-toastify'


import { IStateDefaultType } from './types'


export const showErrorMessage = (error, default_message) => {
  let data = error?.response?.data
  if(!has(error, 'response'))
    data = error

  if(Array.isArray(data))
    data.forEach(e => toast.error(e))
  else if (typeof data == 'object') {
    if (data.detail) {
      toast.error(data.detail)
      return
    }

    forEach(data, error_data => {
      if (typeof error_data == 'object') {
        forEach(error_data, message => {
          if(typeof message == 'string')
            toast.error(message)
          else
            showErrorMessage(message, default_message)
        })
      } else
        toast.error(error_data)
    })
  } else
    toast.error(default_message)
}


export const state_default: IStateDefaultType = {
  count: 0,
  first: 1,
  has_next: null,
  has_prev: null,
  last: "last",
  next: null,
  num_pages: 0,
  page_number: 1,
  previous: null,
  results: [],
}
