// project imports
import Landing from "../containers/home"

// local imports
import { IRouteItem } from "./types"

const Route: IRouteItem[] = [
  {
    component: Landing,
    exact: true,
    path: '/',
  },
]

export default Route