<<<<<<< HEAD
import React, { Component } from 'react'
import Header from './header/Header.js'
import Routes from './Routes'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      GivenName: '',
      loggedIn: false
    }
    this.setName = this.setName.bind(this)
  }

  setName (name) {
    this.setState({
      GivenName: name,
      loggedIn: !this.state.loggedIn
    })

  }

  render () {
    return (
      <div className='App-MainContainer-Div'>
        <Header name={this.state.GivenName} loggedIn={this.state.loggedIn}/>
        <Routes setName={this.setName} loggedIn={this.state.loggedIn} />
      </div>
    )
  }
}

export default App
