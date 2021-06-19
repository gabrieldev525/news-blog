// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// Project
import { fetchPostDetail } from '../../store/modules/post/actions'
import { IPost } from '../../store/modules/post/types'
import { IState } from '../../store/modules/types'

// Local
import { IPostParams } from './types'

const PostDetail = () => {

  // hooks
  const params: IPostParams = useParams()
  const dispatch = useDispatch()

  // redux
  const post_detail = useSelector<IState, IPost>(store => store.post_detail)

  useEffect(() => {
    dispatch(fetchPostDetail(params.post_slug))
  }, [params.post_slug])

  return (
    <div className='post-detail-content'>
      <img src={post_detail?.image} className='post-detail-image' />

      <h1>{post_detail?.title}</h1>
      <span>{post_detail?.description}</span>
    </div>
  )
}

export default PostDetail