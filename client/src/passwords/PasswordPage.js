
import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import es6 from 'es6-promise'
es6.polyfill()
//const url = 'http://localhost:5001/api/passwords'
const url = 'https://localhost:3001/api/passwords'
class PasswordPage extends Component {
  constructor (props) {
    super(props)
    this.state = { passwords: [] }
    this.getPasswordsPost = this.getPasswordsPost.bind(this)
  }

  // Fetch passwords after first mount
  componentDidMount () {
    this.getPasswordsPost()
  }

  getPasswords () {
    // Get the passwords and store them in state
    fetch(url)
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(passwords => this.setState({ passwords }))
      .catch(error => console.log('getPwords', error))
  }
   getPasswordsPost () {
    // Get the passwords and store them in state
    let body = JSON.stringify({username:'test',password:'test'})
    fetch(url, {
      method: 'post',
      body: body
    })
    .then(res => res.json())
    .then(passwords => this.setState({ passwords }))
    .catch(error => console.log('postPwords', error))
  }

  // getPasswordsPost () {
  //   // Get the passwords and store them in state
  //   fetch('http://localhost:5001/api/passwords',{
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: 'xxx'
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(passwords => this.setState({ passwords }))
  // }

  render () {
    const passwords  = this.state.passwords
    return (
      <div className='App'>
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className='passwords'>
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className='more'
              onClick={this.getPasswordsPost}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className='more'
              onClick={this.getPasswordsPost}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default PasswordPage
