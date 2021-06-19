// React
import React from 'react'

interface IComponent {
    routes: IRouteItem[];
}


export interface IRouteItem {
    component: React.FC<IComponent>,
    exact: boolean,
    path: string,
    routes?: IRouteItem[],
}