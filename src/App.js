// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

/**
 * Load components
 */
import Create from './components/Create';
import Edit from './components/Edit';
import List from './components/List';

class App extends Component {
  render() { 
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'}  className="navbar-brand">Simple Boilerplate(React+webpack+babel+axios+bootstrap)</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
                <li className="nav-item"><Link to={'/list'} className="nav-link">List</Link></li>
              </ul>
              <hr />
            </div>
          </nav> <br />
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/list' component={ List } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;