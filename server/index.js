import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import generatePassword from 'password-generator'

const app = express()
// Add cors to all routes
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, '../client/build')))

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
  const count = 4
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
app.get('/', (req, res) => {
  console.log('herelllllll')
  res.sendFile(path.resolve(__dirname, '../', 'client/build/index.html'))
})

const port = process.env.PORT || 5001
app.listen(port)

console.log(`Password generator listening on ${port}`)
