import React, { Component } from 'react'

class AboutPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputboxText: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  handleClick () {
    this.props.setName(this.state.inputboxText)
  }

  handleTextChange (e) {
    this.setState({
      inputboxText: e.target.value
    })
  }
  render () {
    return (
      <div className='AboutPage-Main-Container'>
        <h1>About Page</h1>
        <input type='text' value={this.state.inputboxText} onChange={this.handleTextChange} />
        <button onClick={this.handleClick}>My Button</button>
      </div>
    )
  }
}

export default AboutPage
