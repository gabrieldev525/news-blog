// React
import React, { FormEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

// Third party
import { Form } from 'semantic-ui-react'
import { toast } from 'react-toastify'

// Project
import { createCategory, editCategory, fetchCategoryDetail } from '../../store/modules/categories/actions'
import { IState } from '../../store/modules/types'
import { ICategory } from '../../store/modules/categories/types'

// Local
import { ICategoryDetailParams } from './types'


const CategoryCreate = () => {

  // state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // hooks
  const dispatch = useDispatch()
  const history = useHistory()
  const params: ICategoryDetailParams = useParams()

  // redux
  const category_detail = useSelector<IState, ICategory>(store => store.category_detail)

  useEffect(() => {
    if(params.category_slug) {
      dispatch(fetchCategoryDetail(params.category_slug))
    }
  }, [params.category_slug])

  useEffect(() => {
    if(!params.category_slug)
      return

    setTitle(category_detail.title)
    setDescription(category_detail.description)
  }, [category_detail.slug])

  const handleChange = (event: FormEvent, { value, name }) => {
    if(name == 'title')
      setTitle(value)
    else if(name == 'description')
      setDescription(value)
  }

  const handleSubmit = () => {
    if(!title) {
      toast.error('Preencha o nome da categoria')
      return
    }

    if(params.category_slug) {
      const data = {}

      if(title != category_detail.title)
        data['title'] = title
      if(description != category_detail.description)
        data['description'] = description

      dispatch(editCategory(params.category_slug, data, {
        onfinish: (response) => {
          history.push(`/category/detail/${response.data.slug}`)
        }
      }))
    } else {
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
          content={params.category_slug ? 'Editar' : 'Criar'} />
      </div>
    </Form>
  )
}

export default CategoryCreate