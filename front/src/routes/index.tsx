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
import UserForm from '../containers/users/user-form'
import User from '../containers/users'
import UserList from '../containers/users/user-list'

const Route: IRouteItem[] = [
  {
    component: Landing,
    exact: true,
    path: '/',
  },
  {
    component: User,
    exact: false,
    path: '/user',
    routes: [
      {
        component: UserForm,
        exact: true,
        path: '/user/register'
      },
      {
        component: UserForm,
        exact: true,
        path: '/user/edit/:user_id'
      },
      {
        component: UserList,
        exact: true,
        path: '/user/list'
      }
    ]
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