import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch'

class App extends Component {
  /* istanbul ignore next: constructor is not picked up by tests */
  constructor(props){
    super(props)
    this.state = { passwords: [] }
    this.getPasswords = this.getPasswords.bind(this)
  }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords(){
    /* istanbul ignore next */
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }))
  }

  displayPasswords(){
    return this.state.passwords.map((password, index) =>
      <li key={index}>
        {password}
      </li>
    )
  }
  displayPasswordDiv(){
    return (<div>
        <h1>5 Passwords.</h1>
        <ul className="passwords">
          {this.displayPasswords()}
        </ul>
        <button
          className="more"
          onClick={this.getPasswords}>
          Get More
        </button>
      </div>
    )
  }
  displayNoPasswordsFoundDiv(){
    return (
      <div>
        <h1>No passwords :(</h1>
        <button
          className="more"
          onClick={this.getPasswords}>
          Try Again?
        </button>
      </div>
    )
  }
  render() {
    const password = this.state.passwords 
    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {password.length ? this.displayPasswordDiv() : this.displayNoPasswordsFoundDiv()}
      </div>
    );
  }
}

export default App;