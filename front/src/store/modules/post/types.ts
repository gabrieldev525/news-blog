import { IStateDefaultType } from "../../utils/types";

export enum PostTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
}


export interface IPost {
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