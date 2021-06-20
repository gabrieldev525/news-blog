import React from 'react'

// Third party
import queryString from 'query-string'
import { forEach, isEmpty, has } from 'lodash'


export const getLocationFilters = (location, filters = []) => {
  const locationSearch = queryString.parse(location.search)
  const locationFilters = {}

  if (isEmpty(filters))
    return locationSearch

  forEach(filters, (key) => {
    if (has(locationSearch, key))
      locationFilters[key] = locationSearch[key]
  })
  return locationFilters
}