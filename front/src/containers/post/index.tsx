// React
import React from 'react'

// Third party
import { map } from 'lodash'

// Project
import RouteWithSubRoutes from '../../components/common/route-with-sub-routes'
import { IProps } from '../../utils'

// Local
import './styles.css'


const Post: React.FC<IProps> = (props) => {
  return (
    <>
      { map(props.routes, (route, index) => <RouteWithSubRoutes key={ index } { ...route } /> ) }
    </>
  )
}

export default Post