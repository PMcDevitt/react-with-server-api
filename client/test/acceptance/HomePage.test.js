/* eslint-disable no-var */
'use strict'

import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

let expect = chai.expect
chai.use(sinonChai)

describe('app login flow', () => {
  let loginUrl, homeUrl
  it('sets up initial variables', () => {
    browser.get('/')

    browser.sleep(6000).then(() => {
      expect('1').to.equal('1')
    })
  })
})
