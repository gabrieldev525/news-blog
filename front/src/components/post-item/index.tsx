// React
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Third party
import { truncate } from 'lodash'
import { Icon } from 'semantic-ui-react'

// Project
import { deletePost } from '../../store/modules/post/actions'

// Local
import { IPostItem } from './types'
import './styles.css'

const PostItem = ({ data, isRecentlyNews=false }: IPostItem) => {

  // hooks
  const dispatch = useDispatch()
  const history = useHistory()

  const onClickRemovePost = () => {
    dispatch(deletePost(data.slug))
  }

  return (
    <div className={`post-item ${isRecentlyNews && 'main-news'}`}>
      <img className='post-image' src={data.image} />

      <div className='flex-row'>
        <Icon
          name='trash alternate'
          color='red'
          className='pointer'
          onClick={onClickRemovePost} />

        <Icon
          name='edit'
          className='pointer'
          onClick={() => history.push(`/post/edit/${data.slug}`)} />
      </div>

      <h1 className='post-title'>
        <Link to={`/post/detail/${data.slug}`}>{data.title}</Link>
      </h1>
      <span className='post-description'>
        { truncate(data.description, { length: 80 }) }
      </span>
    </div>
  )
}

export default PostItem