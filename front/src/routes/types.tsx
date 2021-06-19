// React
import React from 'react'

export interface IRouteItem {
    component: React.FC,
    exact: boolean,
    path: string,
    routes?: IRouteItem[],
}