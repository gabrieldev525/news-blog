export interface IStateDefaultType {
  num_pages?: number,
  count?: number,
  previous?: number,
  has_prev?: boolean,
  next?: number,
  has_next?: boolean,
  results: Array<Object> | Object | string
  last?: string,
  first?: number,
  page_number?: number,
  page_size?: number
}