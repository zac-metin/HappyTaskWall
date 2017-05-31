import React from 'react'
import {HashRouter as Router, Route } from 'react-router-dom'

import Board from './Board'

const App = () => (
  <div className='app-container'>
  <Router>
  <Route path="/" exact="true" component={Board}>
  <Board />
  </Router>
  </div>
)

export default App
