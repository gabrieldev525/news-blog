// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// Project
import { deletePost, fetchPostDetail } from '../../store/modules/post/actions'
import { IPost } from '../../store/modules/post/types'
import { IState } from '../../store/modules/types'
import { IUserState } from '../../store/modules/current_user/types'

// Local
import { IPostParams } from './types'

const PostDetail = () => {

  // hooks
  const params: IPostParams = useParams()
  const dispatch = useDispatch()
  const history = useHistory()

  // redux
  const post_detail = useSelector<IState, IPost>(store => store.post_detail)
  const current_user = useSelector<IState, IUserState>(store => store.current_user)

  const onClickRemovePost = () => {
    dispatch(deletePost(params.post_slug, {
      onfinish: () => history.push('/')
    }))
  }

  useEffect(() => {
    dispatch(fetchPostDetail(params.post_slug))
  }, [params.post_slug])

  return (
    <div className='post-detail-content'>
      <img src={post_detail?.image} className='post-detail-image' />

      {
        current_user?.username && (
          <div className='flex-row'>
            <Icon
              name='trash alternate'
              color='red'
              className='pointer'
              onClick={onClickRemovePost} />

            <Icon
              name='edit'
              className='pointer'
              onClick={() => history.push(`/post/edit/${params.post_slug}`)} />
          </div>
        )
      }

      <h1>{post_detail?.title}</h1>
      <span>{post_detail?.description}</span>
    </div>
  )
}

export default PostDetail