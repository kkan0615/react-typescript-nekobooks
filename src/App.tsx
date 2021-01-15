import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'
import Router from './router/index'

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export default App
