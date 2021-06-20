import { IStateDefaultType } from "../../utils/types";
import { IUserState } from "../current_user/types";

export enum UserTypes {
  CREATE_USER = 'CREATE_USER',
  CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  DELETE_USER = 'DELETE_USER',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  FETCH_USER_DETAIL = 'FETCH_USER_DETAIL',
  FETCH_USER_DETAIL_SUCCESS = 'FETCH_USER_DETAIL_SUCCESS',
  EDIT_USER = 'EDIT_USER',
  EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
}

export interface IUserListState extends IStateDefaultType {
  results: Array<IUserState>
}