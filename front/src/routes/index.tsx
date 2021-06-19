// project imports
import Landing from '../containers/home'
import Category from '../containers/category'
import CategoryDetail from '../containers/category/category-detail'

// local imports
import { IRouteItem } from './types'
import CategoryCreate from '../containers/category/category-create'

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
  }
]

export default Route