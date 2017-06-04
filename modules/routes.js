


// modules/routes.js
import React from 'react'
import { Route, IndexRoute,Redirect } from 'react-router'
import App from './App'
// import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'

const about = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./About').default)
    }, 'about')
}

/*const home = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('modules/home'))
  }, 'home')  
}*/

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" getComponent={about}/>
    // <Route path='*' component={Home} />
    <Redirect from='*' to='/' />
  </Route>
)