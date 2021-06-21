// React
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

// Third party
import { Form } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import { map, isEmpty } from 'lodash'

// Project
import { fetchCategories } from '../../store/modules/categories/actions'
import { createPost, editPost, fetchPostDetail } from '../../store/modules/post/actions'
import { IState } from '../../store/modules/types'
import { ICategoryState } from '../../store/modules/categories/types'

// Local
import { IPostParams } from './types'
import { IPost } from '../../store/modules/post/types'
import { IUserState } from '../../store/modules/current_user/types'


const PostCreate = () => {

  // state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState(null)

  // hooks
  const dispatch = useDispatch()
  const history = useHistory()
  const params: IPostParams = useParams()

  // redux
  const categories = useSelector<IState, ICategoryState>(store => store.categories)
  const post_detail = useSelector<IState, IPost>(store => store.post_detail)
  const current_user = useSelector<IState, IUserState>(store => store.current_user)

  if(current_user && !current_user.username)
    return (
      <h1>Você não tem permissão para visualizar essa página</h1>
    )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  useEffect(() => {
    if(params.post_slug) {
      dispatch(fetchPostDetail(params.post_slug))
    }
  }, [params.post_slug])

  useEffect(() => {
    if(!params.post_slug)
      return

    setTitle(post_detail.title)
    setDescription(post_detail.description)
    setImage(post_detail.image)
    setCategory(post_detail.category)
  }, [post_detail.slug])

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

    if(params.post_slug) {  // edit
      const data = new FormData()

      if(title != post_detail.title)
        data.append('title', title)
      if(description != post_detail.description)
        data.append('description', description)
      if(image != post_detail.image)
        data.append('image', image)
      if(category != post_detail.category)
        data.append('category', category)

      dispatch(editPost(params.post_slug, data, {
        onfinish: (response) => {
          history.push(`/post/detail/${response.data.slug}`)
        }
      }))

    } else {  // create
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
  }

  const category_options = map(categories.results, category => ({
    key: category.id,
    value: category.id,
    text: category.title
  }))

  return (
    <Form onSubmit={handleSubmit} className='form-base'>
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
          className='form-button-submit'
          content={params.post_slug ? 'Editar' : 'Criar'} />
      </div>
    </Form>
  )
}

export default PostCreate