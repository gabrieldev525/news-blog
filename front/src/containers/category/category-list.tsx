// React
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

// Third party
import { map } from 'lodash'

// Project
import { getLocationFilters } from '../../components/utils/get-location-filters'
import { deleteCategory, fetchCategories } from '../../store/modules/categories/actions'
import { ICategoryState } from '../../store/modules/categories/types'
import { IState } from '../../store/modules/types'
import Pagination from '../../components/pagination'
import { Icon } from 'semantic-ui-react'


const CategoryList = () => {

  // hooks
  const location = useLocation()
  const dispatch = useDispatch()
  const history = useHistory()

  // redux
  const categories = useSelector<IState, ICategoryState>(store => store.categories)

  // others
  const filters = getLocationFilters(location)

  useEffect(() => {
    dispatch(fetchCategories(filters))
  }, [filters])

  const onClickRemoveCategory = (slug) => {
    dispatch(deleteCategory(slug))
  }

  return (
    <>
      <h1>Categorias</h1>

      {
        map(categories.results, category => {
          return (
            <div className='flex-row'>
              <h3>{category.title}</h3>

              <div className='flex-row'>
                <Icon
                  name='trash alternate'
                  color='red'
                  className='pointer'
                  onClick={() => onClickRemoveCategory(category.slug)} />

                <Icon
                  name='edit'
                  className='pointer'
                  onClick={() => history.push(`/category/edit/${category.slug}`)}/>
              </div>
            </div>
          )
        })
      }

      <Pagination data={categories} />
    </>
  )
}


export default CategoryList