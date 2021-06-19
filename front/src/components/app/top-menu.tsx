// react
import React from 'react'
import { Link } from 'react-router-dom'

// third party
import {
  Menu
} from 'semantic-ui-react'

// local
import './styles.css'


const TopMenu = () => {
  return (
    <Menu attached='top' borderless className='top-menu'>
      <Menu.Menu position='left'>
        <Menu.Item>Inicio</Menu.Item>
        <Menu.Item>Categoria</Menu.Item>
      </Menu.Menu>

      <Menu.Item as={ Link } to='/' className='logo-menu'>
        News Blog
      </Menu.Item>

      <Menu.Menu position='right' className='no-margin right-menu-top'>
        <Menu.Item>Login</Menu.Item>
        <Menu.Item>Cadastro</Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu