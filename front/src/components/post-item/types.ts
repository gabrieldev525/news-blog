import { IPost } from '../../store/modules/post/types';

export interface IPostItem {
  data: IPost,
  isRecentlyNews?: boolean
}