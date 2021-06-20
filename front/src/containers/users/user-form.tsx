// React
import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Third party
import { Form, InputOnChangeData } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { createUser } from '../../store/modules/users/actions'


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
    if(!firstName || !lastName || !email || !password || !cellphone || !username) {
      toast.error('Preencha todos os campos')
      return
    }

    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      cellphone,
      username
    }

    dispatch(createUser(data, {
      onfinish: () => history.push('/')
    }))
  }

  return (
    <>
      <h1>Cadastro</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Input
          name='first_name'
          label='Nome'
          onChange={handleChange} />

        <Form.Input
          name='last_name'
          label='Sobrenome'
          onChange={handleChange} />

        <Form.Input
          name='username'
          label='Nome de usuário'
          onChange={handleChange} />

        <Form.Input
          type='email'
          name='email'
          label='Email'
          onChange={handleChange} />

        <Form.Input
          type='password'
          name='password'
          label='Senha'
          onChange={handleChange} />

        <Form.Input
          name='cellphone'
          label='Telefone'
          onChange={handleChange}
          placeholder='+5585988887777'/>

        <div className='flex-row'>
          <Form.Button
            type='button'
            content='Cancelar'
            onClick={() => history.push('/')}/>

          <Form.Button
            type='submit'
            content='Criar' />
        </div>
      </Form>

    </>
  )
}

export default Register