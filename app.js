const express = require('express');
const route = require('./src/route')
const bodyParser = require("body-parser")


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/shotcut', route)
app.use('/doc', express.static('apidoc'));

app.listen(3001, () => {
    console.log('app listening on port 3001.')
})
