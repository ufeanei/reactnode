// nodejs uses commonjs module system of importing an exporting files
const express = require('express');

const app = express()

app.get('/', (req, res) => {
   res.send({hi: 'there'})
})


app.listen(5000, ()=> console.log('hi there'))
