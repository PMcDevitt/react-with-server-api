import express from 'express'
import path from 'path'
import generatePassword from 'password-generator'

const app = express()

// Serve static files from the React app
<<<<<<< HEAD
app.use(express.static(path.resolve(__dirname, '../client/build')))
=======
app.use(express.static(path.join(__dirname, '../client/build')));
// app.use(express.static(path.join(__dirname, '../newClient/dist')));
>>>>>>> 2a079f6699e6ff1535a78ffb91580c11a5aaec57

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
  // Return them as json
  res.json(passwords)

  console.log(`Sent ${count} passwords`)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
<<<<<<< HEAD
  console.log('herelllllll')
  res.sendFile(path.resolve(__dirname, '../', 'client/build/index.html'))
})

const port = process.env.PORT || 5001
app.listen(port)
=======
  res.send(200)
  // res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5001;
app.listen(port);
>>>>>>> 2a079f6699e6ff1535a78ffb91580c11a5aaec57

console.log(`Password generator listening on ${port}`)
