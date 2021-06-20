// Project
import { IPost } from '../post/types'

export enum MenuTypes {
  FETCH_MENU = 'FETCH_MENU',
  FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS',
}

export interface IMenu {
  [key: string]: {
    [key: string]: Array<IPost>
  }
}