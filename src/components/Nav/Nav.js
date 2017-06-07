import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
      return(
        <nav>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        </nav>
      )
    }
}
export default Nav
