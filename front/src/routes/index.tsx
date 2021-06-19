// project imports
import Landing from '../containers/home'
import Category from '../containers/category'
import CategoryDetail from '../containers/category/category-detail'

// local imports
import { IRouteItem } from './types'
import CategoryCreate from '../containers/category/category-create'
import Post from '../containers/post'
import PostCreate from '../containers/post/post-create'

const Route: IRouteItem[] = [
  {
    component: Landing,
    exact: true,
    path: '/',
  },
  {
    component: Category,
    exact: false,
    path: '/category',
    routes: [
      {
        component: CategoryDetail,
        exact: true,
        path: '/category/detail/:category_slug'
      },
      {
        component: CategoryCreate,
        exact: true,
        path: '/category/create'
      }
    ]
  },
  {
    component: Post,
    exact: false,
    path: '/post',
    routes: [
      {
        component: PostCreate,
        exact: true,
        path: '/post/create'
      }
    ]
  }
]

export default Route