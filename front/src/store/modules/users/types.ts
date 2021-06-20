import { IStateDefaultType } from "../../utils/types";
import { IUserState } from "../current_user/types";

export enum UserTypes {
  CREATE_USER = 'CREATE_USER',
  CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
}

export interface IUserListState extends IStateDefaultType {
  results: Array<IUserState>
}