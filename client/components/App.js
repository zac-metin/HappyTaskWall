import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Board from './Board'

const App = () => (
  <div className='app-container'>
  <p>If you see this, app has rendered</p>
<Router>
<Route path='/' exact component={Board} />
</Router>
  </div>
)

export default App
