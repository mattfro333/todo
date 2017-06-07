import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home.js'
import Nav from './components/Nav/Nav.js'
import Todo from './components/Todo/Todo.js'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Route path="/" component={Nav}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/todo" component={Todo}/>
      </div>
      </Router>
    );
  }
}

export default App;
