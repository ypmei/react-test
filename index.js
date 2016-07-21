import './style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { createHashHistory } from 'history'
import {Router, Route, useRouterHistory } from 'react-router'
import News from './app/News'

const history = useRouterHistory(createHashHistory)({queryKey:false})

ReactDOM.render((
  <Router history={history}>
  	<Route path="/" component={News} />
  </Router>
), document.getElementById('root'))



