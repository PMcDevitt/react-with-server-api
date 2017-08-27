import React, { Component } from 'react'

class HomePage extends Component {
  constructor (props) {
    super(props)
    console.log('HomePage', props)
  }

  render () {
    return (
      <div className='HomePage-Main-Container'>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default HomePage
