// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import PostItem from '../../components/post-item'

// Third party
import { map } from 'lodash'
import { Icon } from 'semantic-ui-react'

// Project
import { deleteCategory, fetchCategoryDetail } from '../../store/modules/categories/actions'
import { ICategory } from '../../store/modules/categories/types'
import { fetchPosts } from '../../store/modules/post/actions'
import { IPostState } from '../../store/modules/post/types'
import { IState } from '../../store/modules/types'
import { IUserState } from '../../store/modules/current_user/types'

import '../home/styles.css'

// Local
import { ICategoryDetailParams } from './types'

const CategoryDetail = () => {

  // hooks
  const params: ICategoryDetailParams = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  // redux
  const category_detail = useSelector<IState, ICategory>(store => store.category_detail)
  const posts = useSelector<IState, IPostState>(store => store.posts)
  const current_user = useSelector<IState, IUserState>(store => store.current_user)

  const onClickRemoveCategory = () => {
    dispatch(deleteCategory(params.category_slug, {
      onfinish: () => history.push('/')
    }))
  }

  useEffect(() => {
    dispatch(fetchCategoryDetail(params.category_slug))
  }, [params.category_slug])

  useEffect(() => {
    if(category_detail.id)
      dispatch(fetchPosts({ category: category_detail.id }))
  }, [category_detail.id])

  return (
    <>
      <div className='flex-column align-center margin-top'>
        <h1>{category_detail?.title}</h1>

        {
          current_user?.username && (
            <div className='flex-row item-action-button'>
              <Icon
                name='trash alternate'
                color='red'
                className='pointer'
                onClick={onClickRemoveCategory} />

              <Icon
                name='edit'
                className='pointer'
                onClick={() => history.push(`/category/edit/${category_detail.slug}`)}/>
            </div>
          )
        }
      </div>

      <div className='post-list'>
        {
          map(posts.results, (post, key) => {
            return (
              <PostItem
                key={key}
                data={post} />
            )
          })
        }
      </div>
    </>
  )
}

export default CategoryDetail