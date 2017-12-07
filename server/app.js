import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import generatePassword from 'password-generator'

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.all('/*', function (req, res, next){
  res.set({
    'x-xss-protection':'1; mode=block',
    'Content-Security-Policy': `default-src 'self'`,
    'x-frame-options': 'DENY',
    'cache-control':'private, no-store, max-age=0, must-revalidate',
    'x-content-type-options':'nosniff',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST'
  })
  next()
})

// Put all API endpoints under '/api'
app.get('/api/passwords', cors(), (req, res) => {
  const count = 5
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
  // Return them as json
  res.json(passwords)

  console.log(`Sent ${count} passwords`)
})
// Put all API endpoints under '/api'
app.post('/api/passwords', (req, res) => {
  console.log(req.body)
  const count = 10
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
  // Return them as json
  res.json(passwords)
  console.log(`Sent ${count} passwords`)
})

// C:\Users\Paddy\Documents\GitHub\react-with-server-api\client\.babelrc
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   console.log('herelllllll')
//   res.sendFile(path.resolve(__dirname, '../', 'client/build/index.html'))
// })

app.post('*', (req, res) => {
  res.redirect('/')
  //res.sendFile(path.resolve(__dirname, '../', 'client/build/index.html'))
})
app.get('*', (req, res) => {
  res.redirect('/')
})

module.exports = app
