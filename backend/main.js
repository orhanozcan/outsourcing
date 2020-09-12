var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var user = require('./services/userService')


var app = express()
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

app.get('/', function (req, res) {
    res.send('Not allowed')
})

app.use('/user', user.router)

app.listen('8080')