// React
import React from 'react'
import { Link } from 'react-router-dom'

// Third party
import { truncate } from 'lodash'

// Local
import { IPostItem } from './types'
import './styles.css'

const PostItem = ({ data, isRecentlyNews=false }: IPostItem) => {
  return (
    <div className={`post-item ${isRecentlyNews && 'main-news'}`}>
      <img className='post-image' src={data.image} />
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