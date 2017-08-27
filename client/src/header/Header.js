import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
  renderLinks () {
    return (
      <nav>
        <Link to='/'>Home</Link>  |
        <Link to='/passwords'>Passwords</Link> |
        <Link to='/about'>About</Link> |
        Welcome {this.props.name} to the site
      </nav>
    )
  }

  renderRedirect () {
    return (<nav><Link to='/about'>Login</Link> Please login</nav>)
  }

  render () {
    return (
      <header>
        {this.props.loggedIn ? this.renderLinks() : this.renderRedirect()}
      </header>
    )
  }
}

export default Header
