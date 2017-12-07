import React from 'react'
//const url = 'http://localhost:5001/api/passwords'
const url = 'https://localhost:3001/api/passwords'
class Passwords extends React.Component{
  state = { passwords: []}
  componentDidMount = () =>{
    this.getPasswords()
  }
  getPasswords = () => {
    let body = JSON.stringify({username:'test',password:'test'})
    fetch(url, {
      method: 'post',
      body: body
    })
    .then(res => res.json())
    .then(passwords => this.setState({ passwords }))
  }

  render () {
    const passwords  = this.state.passwords
    return (
      <div className='App'>
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Home Passwords.</h1>
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
              onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className='more'
              onClick={this.getPasswords}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    )
  }
  }

  export default Passwords
