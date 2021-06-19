import { IStateDefaultType } from '../../utils/types';

export enum CategoryTypes {
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORY_DETAIL = 'FETCH_CATEGORY_DETAIL',
  FETCH_CATEGORY_DETAIL_SUCCESS = 'FETCH_CATEGORY_DETAIL_SUCCESS'
}


export interface ICategory {
  id: number,
  title: string,
  description: string,
  slug: string,
  created: string,
  modified: string
}

export interface ICategoryState extends IStateDefaultType {
  results: Array<ICategory>
}