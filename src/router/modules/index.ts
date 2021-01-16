import { RouterConfig } from '../../../types/router'
import Home from '../../pages/home/index'
import BooksPage from '../../pages/books/index'

export const defaultLayoutRouters: Array<RouterConfig> = [
  {
    _id: '6002910c306c453019111eb9',
    name: 'Home',
    title: 'Home',
    exact: true,
    component: Home,
    path: '/',
  },
  {
    _id: '600291ed8c75f79ecae5bf4a',
    name: 'Books',
    title: 'Books',
    component: BooksPage,
    path: '/books',
  },
]
