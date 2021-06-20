// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Third party
import { map } from 'lodash'

// Project
import { fetchMenu } from '../../store/modules/menu/actions'
import { IState } from '../../store/modules/types'
import { IMenu } from '../../store/modules/menu/types'
import { Link } from 'react-router-dom'
import Truncate from '../truncate'

// Local
import './styles.css'


const PostMenu = () => {

  // hooks
  const dispatch = useDispatch()

  // redux
  const menuList = useSelector<IState, IMenu>(store => store.menu)

  useEffect(() => {
    dispatch(fetchMenu())
  }, [])

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Março',
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro'
  ]

  return (
    <div className='side-menu'>
      {
        map(menuList, (month_list, key) => {
          return (
            <div className='menu-year-item'>
              <b className='menu-year-title'>{key}</b>

              <div className='menu-month-list'>
                {
                  map(month_list, (posts, month) => {
                    return (
                      <div className='menu-month-item'>
                        <b>{monthNames[parseInt(month) - 1]}</b>

                        <div className='menu-post-list'>
                          {
                            map(posts, (post, key) => {
                              return (
                                <Link to={`/post/detail/${post.slug}`} className='menu-post-item'>
                                  <Truncate content={post.title} length={35} />
                                </Link>
                              )
                            })
                          }
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostMenu