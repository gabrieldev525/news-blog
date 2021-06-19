// React
import React from 'react'

// Third party
import { truncate } from 'lodash'

// Project
import Truncate from '../../components/truncate'

// Local
import { IPostItem } from './types'
import './styles.css'

const PostItem = ({ data, isRecentlyNews=false }: IPostItem) => {
  return (
    <div className={`post-item ${isRecentlyNews && 'main-news'}`}>
      <img className='post-image' src={data.image} />
      <h1 className='post-title'>{data.title}</h1>
      <span className='post-description'>
        { truncate(data.description, { length: 80 }) }
      </span>
    </div>
  )
}

export default PostItem