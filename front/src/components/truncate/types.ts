// Third party
import { SemanticICONS } from 'semantic-ui-react'

export interface ITruncate {
  content: string,
  position?:
    | 'top left'
    | 'top right'
    | 'bottom right'
    | 'bottom left'
    | 'right center'
    | 'left center'
    | 'top center'
    | 'bottom center',
  icon?: SemanticICONS,
  length?: number,
  children?: React.FC
}