import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Cadastro from './pages/Cadastro'

function Routes() {
  return (
    <BrowserRouter >
      <Route exact path="/" component={HomePage} />
      <Route  path="/login" component={LoginPage} />
      <Route  path="/cadastro" component={Cadastro} />
    
    </BrowserRouter>
  )
}

export default Routes
