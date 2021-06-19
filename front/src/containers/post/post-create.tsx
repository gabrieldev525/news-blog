// React
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Third party
import { Form } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { map, isEmpty } from 'lodash'

// Project
import { fetchCategories } from '../../store/modules/categories/actions'
import { createPost } from '../../store/modules/post/actions'
import { IState } from '../../store/modules/types'
import { ICategoryState } from '../../store/modules/categories/types'


const PostCreate = () => {

  // state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')

  // hooks
  const dispatch = useDispatch()
  const history = useHistory()

  // redux
  const categories = useSelector<IState, ICategoryState>(store => store.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const handleChange = (event, { value, name }) => {
    if(name == 'title')
      setTitle(value)
    else if(name == 'description')
      setDescription(value)
    else if(name == 'image')
      setImage(event.target.files[0])
    else if(name == 'category')
      setCategory(value)
  }

  const handleSubmit = () => {
    if(isEmpty(title) || isEmpty(description) || !image || !category) {
      toast.error('Preencha todos os campos')
      return
    }

    const data = new FormData()
    data.append('title', title)
    data.append('description', description)
    data.append('category', category)
    data.append('image', image)

    dispatch(createPost(data, {
      onfinish: (response) => {
        history.push(`/post/detail/${response.data.slug}`)
      }
    }))
  }

  const category_options = map(categories.results, category => ({
    key: category.id,
    value: category.id,
    text: category.title
  }))

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

      <Form.Input
        type='file'
        name='image'
        fluid
        onChange={handleChange}
        label='Imagem' />

      <Form.Select
        fluid
        name='category'
        value={category}
        onChange={handleChange}
        label='Categoria'
        options={category_options} />

      <div className='flex-row'>
        <Form.Button
          type='button'
          content='Cancelar'
          onClick={() => history.push('/')} />

        <Form.Button
          type='submit'
          content='Criar' />
      </div>
    </Form>
  )
}

export default PostCreate