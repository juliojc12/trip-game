import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function Routes() {
  return (
    <BrowserRouter >
      <Route exact path="/" component={HomePage} />
      <Route  path="/login" component={LoginPage} />
    
    </BrowserRouter>
  )
}

export default Routes