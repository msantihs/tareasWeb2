const express = require('express')
const rutas = require('./rutas')

const app = express()

const port = 3000


rutas(app)

app.listen (port, function () {
    console.log('runing pog in : '+ port)
})