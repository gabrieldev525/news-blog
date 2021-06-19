// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostItem from '../../components/post-item'

// Third party
import { map } from 'lodash'

// Project
import { fetchCategoryDetail } from '../../store/modules/categories/actions'
import { ICategory } from '../../store/modules/categories/types'
import { fetchPosts } from '../../store/modules/post/actions'
import { IPostState } from '../../store/modules/post/types'
import { IState } from '../../store/modules/types'

import '../home/styles.css'

// Local
import { ICategoryDetailParams } from './types'

const CategoryDetail = () => {

  // hooks
  const params: ICategoryDetailParams = useParams()
  const dispatch = useDispatch()

  // redux
  const category_detail = useSelector<IState, ICategory>(store => store.category_detail)
  const posts = useSelector<IState, IPostState>(store => store.posts)

  useEffect(() => {
    dispatch(fetchCategoryDetail(params.category_slug))
  }, [params.category_slug])

  useEffect(() => {
    if(category_detail.id)
      dispatch(fetchPosts({ category: category_detail.id }))
  }, [category_detail.id])

  return (
    <>
      <h1>{category_detail?.title}</h1>

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