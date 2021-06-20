// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

// Third party
import { map } from 'lodash'

// Project
import { fetchPosts } from '../../store/modules/post/actions'
import { IState } from '../../store/modules/types'
import { IPostState } from '../../store/modules/post/types'
import PostItem from '../../components/post-item'
import Pagination from '../../components/pagination'
import { getLocationFilters } from '../../components/utils/get-location-filters'

// Local
import './styles.css'

const Home = () => {
  // hooks
  const dispatch = useDispatch()
  const location = useLocation()

  // redux
  const posts: IPostState = useSelector<IState, IPostState>(store => store.posts)

  const filters = getLocationFilters(location)

  useEffect(() => {
    dispatch(fetchPosts(filters))
  }, [filters])

  if(posts.results.length == 0)
    return (
      <span>Nenhuma postagem cadastrada</span>
    )

  return (
    <>
      <PostItem
        data={posts.results[0]}
        isRecentlyNews={true} />

      <div className='post-list'>
        {
          posts.results.length > 1 &&
            map(posts.results.slice(1), (post, key) => {
              return (
                <PostItem
                  key={key}
                  data={post} />
              )
            })
        }
      </div>

      <Pagination data={posts} />
    </>
  )
}

export default Home