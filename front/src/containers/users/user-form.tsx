// React
import React, { FormEvent, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Third party
import { Form, InputOnChangeData } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { createUser, editUser, fetchUserDetail } from '../../store/modules/users/actions'
import { IUserParams } from './types'
import { IState } from '../../store/modules/types'
import { IUserState } from '../../store/modules/current_user/types'


const Register = () => {
  // state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cellphone, setCellphone] = useState('')

  // hooks
  const history = useHistory()
  const dispatch = useDispatch()
  const params: IUserParams = useParams()

  // redux
  const user_detail = useSelector<IState, IUserState>(store => store.user_detail)
  const current_user = useSelector<IState, IUserState>(store => store.current_user)

  if(current_user && !current_user.username && params.user_id)
    return (
      <h1>Você não tem permissão para visualizar essa página</h1>
    )

  useEffect(() => {
    if(params.user_id) {
      dispatch(fetchUserDetail(params.user_id))
    }
  }, [params.user_id])

  useEffect(() => {
    if(!params.user_id)
      return

    if(user_detail.first_name)
      setFirstName(user_detail.first_name)
    if(user_detail.last_name)
      setLastName(user_detail.last_name)
    if(user_detail.username)
      setUsername(user_detail.username)
    if(user_detail.email)
      setEmail(user_detail.email)
    if(user_detail.cellphone)
      setCellphone(user_detail.cellphone)
  })

  const handleChange = (event: FormEvent, { value, name }: InputOnChangeData) => {
    if(name == 'first_name')
      setFirstName(value)
    else if(name == 'last_name')
      setLastName(value)
    else if(name == 'username')
      setUsername(value)
    else if(name == 'email')
      setEmail(value)
    else if(name == 'password')
      setPassword(value)
    else if(name == 'cellphone')
      setCellphone(value)
  }

  const handleSubmit = () => {
    if(!firstName || !lastName || !email || !cellphone || !username || (!password && !params.user_id)) {
      toast.error('Preencha todos os campos')
      return
    }

    if(params.user_id) {
      const data = {}

      if(firstName != user_detail.first_name)
        data['first_name'] = firstName
      if(lastName != user_detail.last_name)
        data['last_name'] = lastName
      if(email != user_detail.email)
        data['email'] = email
      if(password)
        data['password'] = password
      if(cellphone != user_detail.cellphone)
        data['cellphone'] = cellphone
      if(username != user_detail.username)
        data['username'] = username

      dispatch(editUser(params.user_id, data, {
        onfinish: () => history.push('/user/list')
      }))
    } else {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        cellphone,
        username
      }

      dispatch(createUser(data, {
        onfinish: () => history.push('/user/list')
      }))
    }

  }

  return (
    <>
      <h1>{params.user_id ? 'Editar usuário' : 'Cadastro usuário'}</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Input
          name='first_name'
          label='Nome'
          onChange={handleChange}
          value={firstName} />

        <Form.Input
          name='last_name'
          label='Sobrenome'
          onChange={handleChange}
          value={lastName} />

        <Form.Input
          name='username'
          label='Nome de usuário'
          onChange={handleChange}
          value={username} />

        <Form.Input
          type='email'
          name='email'
          label='Email'
          onChange={handleChange}
          value={email} />

        <Form.Input
          type='password'
          name='password'
          label='Senha'
          onChange={handleChange}
          value={password} />

        <Form.Input
          name='cellphone'
          label='Telefone'
          onChange={handleChange}
          placeholder='+5585988887777'
          value={cellphone} />

        <div className='flex-row'>
          <Form.Button
            type='button'
            content='Cancelar'
            onClick={() => history.push('/')}/>

          <Form.Button
            type='submit'
            content={params.user_id ? 'Editar' : 'Criar'} />
        </div>
      </Form>

    </>
  )
}

export default Register