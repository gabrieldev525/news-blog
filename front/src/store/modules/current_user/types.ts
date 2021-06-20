import { IStateDefaultType } from "../../utils/types";

export enum UserTypes {
  FETCH_CURRENT_USER = 'FETCH_CURRENT_USER',
  FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS'
}

export interface IUserState {
  email: string,
  first_name: string,
  is_active: boolean
  is_staff: boolean,
  is_superuser: boolean,
  last_login: string,
  last_name: string,
  username: string,
  id: number
}

export interface IUserList extends IStateDefaultType {
  results: Array<IUserState>
}