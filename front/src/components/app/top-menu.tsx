// react
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'

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
import { IUserState } from '../../store/modules/current_user/types'

// local
import './styles.css'


const TopMenu = () => {

  // hooks
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  // redux
  const categories: ICategoryState = useSelector<IState, ICategoryState>(store => store.categories)
  const current_user = useSelector<IState, IUserState>(store => store.current_user)

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

            {
              categories.results.length > 10 && (
                <>
                  <Divider horizontal />

                  <Dropdown.Item
                    content='Todas as categorias'
                    as={Link}
                    to='/category' />
                </>
              )
            }
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as={Link} to='/post/create'>Criar Postagem</Menu.Item>
      </Menu.Menu>

      <Menu.Item as={ Link } to='/' className='logo-menu'>
        News Blog
      </Menu.Item>

      <Menu.Menu position='right' className='no-margin right-menu-top'>
        {
          current_user?.username ? (
            <>
              <Menu.Item>{current_user?.first_name ? current_user?.first_name : current_user?.username}</Menu.Item>
              <Menu.Item
                as='a'
                href={window.dj_urls['account_logout']()}>Sair</Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item
                as='a'
                href={window.dj_urls['two_factor:login']()}>Login</Menu.Item>
              <Menu.Item>Cadastro</Menu.Item>
            </>
          )
        }
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu