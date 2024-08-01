
const express = require('express');
const app = express();
const db = require('./db.js'); 
const bodyParser = require('body-parser')
require ('dotenv').config();
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Welcome to my hotel!');
});






// Import the router files
const personRoutes = require('./routes/personroutes.js')
const menuRoutes = require('./routes/menuRoutes.js')
app.use('/person',personRoutes)
app.use('/menu',menuRoutes)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Listening on port 3000!");
});
