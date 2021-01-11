
const express = require('express'),
      keys = require('./config/keys'),
      mongoose = require('mongoose');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

require('./models/User') //birng the code of models here above passport since passort uses it 
require('./services/passport') // bring the code for the passport service here

const app = express()
const authRoutes = require('./routes/authroutes')


authRoutes(app)
app.get('/', (req, res) => {res.send('hello je susis la')})



const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log('hi there'))
