const express = require('express')
const path = require('path')

module.exports = function(app){ //esto hace el cotorreo del router automaticamente

    app.use('/assets', express.static(path.join(__dirname,'assets')))

    app.get('/proyectos',function(req,res){
        const ruta = path.join(__dirname,'views','proyectos.html')
        res.sendFile(ruta)
    })

    app.get('/sobreMi',function (req,res){
        const ruta = path.join(__dirname,'views','sobreMi.html')
        res.sendFile(ruta)
    })

    app.get('/hobContacto',function (req,res){
        const ruta = path.join(__dirname,'views','hobContacto.html')
        res.sendFile(ruta)
    })
    
    app.get('*',function (req,res){
        const ruta = path.join(__dirname,'views','notFound.html')
        res.status(404).sendFile(ruta)
    })
}

