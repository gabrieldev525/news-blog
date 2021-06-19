// react imports
import React from 'react'

// components
import TopMenu from './top-menu'


const TMenu = ({children}) => {
	return (
    <div>
      <TopMenu />

      { children }
    </div>
	)
}

export default TMenu;