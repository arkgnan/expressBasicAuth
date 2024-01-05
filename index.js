const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const basicAuth = require('express-basic-auth')
const usersRouter = require('./routes/users')

app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'simpleApi'
})

app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

// app.use('/', () => console.log('welcome'))

app.use('/users', usersRouter)

app.listen(3000, function(){
    console.log('konek port 3000 nih');
})


