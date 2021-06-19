// React
import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Third party
import { Form } from 'semantic-ui-react'
import { createCategory } from '../../store/modules/categories/actions'
import { toast } from 'react-toastify'


const CategoryCreate = () => {

  // state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // hooks
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (event: FormEvent, { value, name }) => {
    if(name == 'title')
      setTitle(value)
    else if(name == 'description')
      setDescription(value)
  }

  const handleSubmit = () => {
    if(!title || !description)
      toast.error('Preencha todos os campos')

    const data = {
      title,
      description
    }

    dispatch(createCategory(data, {
      onfinish: (response) => {
        history.push(`/category/detail/${response.data.slug}`)
      }
    }))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name='title'
        fluid
        value={title}
        onChange={handleChange}
        label='Nome' />

      <Form.TextArea
        name='description'
        fluid
        value={description}
        onChange={handleChange}
        label='descrição'
        rows={9} />

      <div className='flex-row'>
        <Form.Button
          type='button'
          content='Cancelar'
          onClick={() => history.push('/')} />

        <Form.Button
          content='Criar' />
      </div>
    </Form>
  )
}

export default CategoryCreate