import express from 'express'
import path from 'path'
import generatePassword from 'password-generator'

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
// app.use(express.static(path.join(__dirname, '../newClient/dist')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
    console.log('in the webservice')
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});    

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
  res.send(200)
  // res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5001;
app.listen(port);

console.log(`Password generator listening on ${port}`);