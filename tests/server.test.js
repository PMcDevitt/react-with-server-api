// var server = require('../server/index')
import server from '../server/index'
import http from 'http'
import assert from 'assert'

describe('server', function () {
  before(function () {
    server.listen(8000)
  })

  after(function () {
    server.close()
  })
})
describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:5001/', function (res) {
      console.log(res)
      assert.equal(200, res.statusCode)
      done()
    })
  })

  it('should say "OK"', function (done) {
    http.get('http://localhost:5001', function (res) {
      var data = ''
      res.on('data', function (chunk) {
        data += chunk
      })

      res.on('end', function () {
        console.log('@@ ', data)
        assert.equal('OK', data)
        done()
      })
    })
  })
})
describe('/api/passwords', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:5001/api/passwords', function (res) {
      assert.equal(200, res.statusCode)
      done()
    })
  })

  it('should return an array of length 5', function (done) {
    http.get('http://localhost:5001/api/passwords', function (res) {
      var data = ''
      res.on('data', function (chunk) {
        data += chunk
      })

      res.on('end', function () {
        assert.equal(5, JSON.parse(data).length)
        done()
      })
    })
  })
})
