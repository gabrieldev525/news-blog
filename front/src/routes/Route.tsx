// project imports
import Landing from '../containers/home'
import Category from '../containers/category'
import CategoryDetail from '../containers/category/category-detail'

// local imports
import { IRouteItem } from './types'

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
        path: '/category/:category_slug'
      }
    ]
  }
]

export default Route