// react
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// third party
import {
  Button,
  Divider,
  Dropdown,
  Menu
} from 'semantic-ui-react'
import { map } from 'lodash'

// Project
import { fetchCategories } from '../../store/modules/categories/actions'
import { ICategoryState } from '../../store/modules/categories/types'
import { IState } from '../../store/modules/types'

// local
import './styles.css'


const TopMenu = () => {

  // hooks
  const dispatch = useDispatch()

  // redux
  const categories: ICategoryState = useSelector<IState, ICategoryState>(store => store.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <Menu attached='top' borderless className='top-menu'>
      <Menu.Menu position='left'>
        <Menu.Item as={Link} to='/'>Inicio</Menu.Item>
        <Dropdown item text='Categorias'>
          <Dropdown.Menu>
            <Dropdown.Item
              icon='add'
              content='criar nova categoria'
              as={Link}
              to='/category/create' />

            <Divider horizontal />

            {
              map(categories.results, (category, key) => {
                return (
                  <Dropdown.Item
                    key={key}
                    as={Link}
                    to={`/category/detail/${category.slug}`}
                    content={category.title} />
                )
              })
            }
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as={Link} to='/post/create'>Criar Postagem</Menu.Item>
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