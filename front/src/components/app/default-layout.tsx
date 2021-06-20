// react imports
import React from 'react'

// components
import TopMenu from './top-menu'


const TMenu = ({children}) => {
	return (
    <>
      <TopMenu />

      { children }
    </>
	)
}

export default TMenu;