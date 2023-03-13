const express = require('express')

const routes = require('./src/rutas/noticias') //carpeta que trae rutas particulares, el router

const {engine} = require('express-handlebars');

const app = express()
const path = require('path')

app.engine('handlebars',engine())
app.set('view engine','handlebars')
app.set('views', './src/views') //views ahorita todavia no trae nada 

const port = 3000

app.use('/assets', express.static(path.join(__dirname,'assets')))
app.use('',routes) 

app.listen (port, function () {
    console.log('runing pog in : '+ port)
})
