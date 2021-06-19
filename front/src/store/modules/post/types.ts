import { IStateDefaultType } from "../../utils/types";

export enum PostTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  CREATE_POST = 'CREATE_POST',
  CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS',
  FETCH_POST_DETAIL = 'FETCH_POST_DETAIL',
  FETCH_POST_DETAIL_SUCCESS = 'FETCH_POST_DETAIL_SUCCESS',
}


export interface IPost {
  id: number,
  title: string,
  description: string,
  slug: string,
  created: string,
  modified: string,
  image: string
}

export interface IPostState extends IStateDefaultType {
  results: Array<IPost>
}