// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

// Third party
import { Icon, Table } from 'semantic-ui-react'
import { map } from 'lodash'

// Project
import { deleteUser, fetchUser } from '../../store/modules/users/actions'
import { getLocationFilters } from '../../components/utils/get-location-filters'
import { IUserList, IUserState } from '../../store/modules/current_user/types'
import { IState } from '../../store/modules/types'
import Pagination from '../../components/pagination'


const UserList = () => {

  // hooks
  const dispatch = useDispatch()
  const location = useLocation()

  // redux
  const userList = useSelector<IState, IUserList>(store => store.users)
  const currentUser = useSelector<IState, IUserState>(store => store.current_user)

  const filters = getLocationFilters(location)

  useEffect(() => {
    dispatch(fetchUser(filters))
  }, [filters.page])

  const onClickRemoveUser = (id) => {
    dispatch(deleteUser(id))
  }

  const renderTable = () => {
    return map(userList.results, (user, key) => {
      return (
        <Table.Row key={key}>
          <Table.Cell>{[user.first_name, user.last_name].join(' ')}</Table.Cell>
          <Table.Cell>{user.username}</Table.Cell>
          <Table.Cell>{user.email}</Table.Cell>
          <Table.Cell>
            <div className='flex-row'>
              <Icon
                name='trash alternate'
                color='red'
                className='pointer'
                disabled={user.username == currentUser?.username}
                onClick={() => onClickRemoveUser(user.id)} />

              <Icon
                name='edit'
                className='pointer' />
            </div>
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  return (
    <>
      <h1>Lista de usuários</h1>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {renderTable()}
        </Table.Body>
      </Table>

      <Pagination data={userList} />
    </>
  )
}

export default UserList