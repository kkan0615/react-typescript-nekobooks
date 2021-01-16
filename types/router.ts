import { RouteProps } from 'react-router'

/**
 * _id - mongoDB id type
 * name - name of Route
 * title - title
 */
export interface RouterConfig extends RouteProps{
  _id: string
  name: string
  title: string
}
