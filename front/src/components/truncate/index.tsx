// React
import React from 'react'

// Third party
import {
  Icon,
  Popup
} from 'semantic-ui-react'
import { truncate, size } from 'lodash'

// Local
import { ITruncate } from './types'


const Truncate = ({ content, position = 'top left', icon, length = 25, children }: ITruncate) => {
  if (size(content) > length) {
    if (children)
      return (
        <Popup
          position={ position }
          trigger={
            <div>
              {
                icon && (
                  <Icon name={ icon } />
                )
              }
              { truncate(content, {'length': length}) }
            </div>
          }>
          { children }
        </Popup>
      )

    return (
      <Popup
        content={ content }
        position={ position }
        trigger={
          <div>
            {
              icon && (
                <Icon name={ icon } />
              )
            }
            { truncate(content, {'length': length}) }
          </div>
        } />
    )
  }

  return (
    <>
      {
        icon && (
          <Icon name={ icon } />
        )
      }
      { content }
    </>
  )
}

export default Truncate