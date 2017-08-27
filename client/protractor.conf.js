/* eslint-disable no-var */
'use strict'
require('babel-core/register')({
  presets: [
    'es2015'
  ]
})
// require('babel/register');

exports.config = {
  specs: ['test/acceptance/**/*.js'],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:3000',
  frameworks: ['mocha', 'chai'],
  onPrepare: function () {
    browser.ignoreSynchronization = true
  }
}
