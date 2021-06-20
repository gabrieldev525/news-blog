// React
import React from 'react'
import { useHistory } from 'react-router-dom'

// Third party
import {
  Pagination as SemanticPagination,
  Icon,
  Grid
} from 'semantic-ui-react'
import queryString from 'query-string'
import { size, isUndefined } from 'lodash'

// Project
import { getLocationFilters } from '../utils/get-location-filters'
import { IStateDefaultType } from '../../store/utils/types'

// Local
import './styles.css'

const Pagination = ({ data, onPageChange }: { data: IStateDefaultType, onPageChange?: (event, data) => void }) => {

  const history = useHistory()

  let filters = {}
  if (isUndefined(onPageChange))
    filters = getLocationFilters(history.location)

  const handlePageChange = (event, { activePage }) => {
    filters['page'] = activePage
    history.replace({ search: queryString.stringify(filters) })
  }

  return (
    <>
      <Grid className='margin-top-small'>
        <Grid.Row>
          <Grid.Column width={6} className='flex-center'>
            {
              data.num_pages <= 1 && (
                <p className='i-margin-vertical-auto'>
                  {`Mostrando ${data.first * data.page_number}-${data.count} resultados`}
                </p>
              )
            }
            {
              data.num_pages >= 2 && (
                <p className='i-margin-vertical-auto'>
                  {`Mostrando ${(data.page_number - 1) * data.page_size + 1}-${(data.page_number - 1) * data.page_size + size(data.results)} de ${data.count} resultados`}
                </p>
              )
            }
          </Grid.Column>
          <Grid.Column floated='right' textAlign='right' width={10}>
            <SemanticPagination
              className='pagination-menu'
              activePage={ data.page_number }
              onPageChange={ onPageChange || handlePageChange }
              totalPages={ data.num_pages }
              ellipsisItem={ { content: <Icon name='ellipsis horizontal' />, icon: true } }
              firstItem={ { content: <Icon name='angle double left' />, icon: true } }
              lastItem={ { content: <Icon name='angle double right' />, icon: true } }
              nextItem={ { content: <Icon name='angle right' />, icon: true } }
              prevItem={ { content: <Icon name='angle left' />, icon: true } }
              secondary />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Pagination