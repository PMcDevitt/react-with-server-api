import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'
import App from './App';
import {expect} from 'chai'
import nock from 'nock'

describe('Given the App Component', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
  it('password state is [] before component mounts ', ()=> {
    let getPasswordsStub = sinon.stub(App.prototype, 'getPasswords').returns(['foo','foo'])
    let wrapper = shallow(<App />)
    expect(wrapper.state().passwords).to.eql([])
    expect(getPasswordsStub.called).to.equal(false)
    getPasswordsStub.restore()
  })
  it('getPasswordsStub gets called when component mounts ', ()=> {
    let getPasswordsStub = sinon.stub(App.prototype, 'getPasswords').returns(['foo','foo'])
    let wrapper = mount(<App />)
    wrapper.update()
    expect(getPasswordsStub.calledOnce).to.equal(true)
    getPasswordsStub.restore()
  })
  it('when displayPasswords is called it returns an array of li objects', () => {
    let displayPW = sinon.spy(App.prototype, 'displayPasswords')
    let getPasswords = sinon.spy(App.prototype, 'getPasswords')
    let wrapper = mount(<App/>)
    
    expect(getPasswords.calledOnce).to.equal(true)
    wrapper.instance().displayPasswords()
    expect(displayPW.calledOnce).to.equal(true)
    displayPW.restore()
    getPasswords.restore()
  });
  describe('using nock no passwords found', () => {
    it('testing getPasswords()', (done) => {
      let nockPasswords = nock('http://localhost:5001')
      .get('/api/passwords')
      .reply(200,{})
      let wrapper = shallow(<App />)
       console.log(1,wrapper.state().passwords)
      wrapper.instance().getPasswords()
     done()
    });
    it('testing getPasswords()', (done) => {
      let wrapper = mount(<App />)
      console.log(2,wrapper.state().passwords)
      wrapper.setState({
        passwords: ['Foo', 'Bar']
      })
      wrapper.instance().getPasswords()
      console.log(3,wrapper.state().passwords)
      done()
    })
  })
})
