// project imports
import Landing from '../containers/home'
import Category from '../containers/category'
import CategoryDetail from '../containers/category/category-detail'

// local imports
import { IRouteItem } from './types'
import CategoryForm from '../containers/category/category-form'
import Post from '../containers/post'
import PostForm from '../containers/post/post-form'
import PostDetail from '../containers/post/post-detail'
import CategoryList from '../containers/category/category-list'
import Register from '../containers/users/user-form'

const Route: IRouteItem[] = [
  {
    component: Landing,
    exact: true,
    path: '/',
  },
  {
    component: Register,
    exact: true,
    path: '/register'
  },
  {
    component: Category,
    exact: false,
    path: '/category',
    routes: [
      {
        component: CategoryList,
        exact: true,
        path: '/category'
      },
      {
        component: CategoryDetail,
        exact: true,
        path: '/category/detail/:category_slug'
      },
      {
        component: CategoryForm,
        exact: true,
        path: '/category/create'
      },
      {
        component: CategoryForm,
        exact: true,
        path: '/category/edit/:category_slug'
      }
    ]
  },
  {
    component: Post,
    exact: false,
    path: '/post',
    routes: [
      {
        component: PostForm,
        exact: true,
        path: '/post/create'
      },
      {
        component: PostForm,
        exact: true,
        path: '/post/edit/:post_slug'
      },
      {
        component: PostDetail,
        exact: true,
        path: '/post/detail/:post_slug'
      }
    ]
  }
]

export default Route