const { response } = require('express')
const express = require('express')

const Tarea = require('../modelos/tarea')

const TareasController = {
    listar: (req,res) => {
        Tarea.find({})
            .then(response =>{
                //console.log('respuesta',response)
                //res.render('tareas',{tareas:response})
                //res.send(response) //se va a mandar la response esto de tarea 5
                res.send(response) 
            })
            .catch(error =>{
                res.status(400).send('algo salio mal')
            })
    },
    ver:(req,res)=>{ //regresar los detalles por el ID 
        Tarea.findById(req.params.id)
            .then(response => {
                //console.log('respuesta',response)
                res.send(response)
            })
            .catch(error =>{
                res.status(400).send('algo salio mal')
            })
    },
    crear:(req,res)=>{
        Tarea.create(req.body)
            .then(response => {
                //console.log('se ha creado la tarea', req.body.titulo)
                res.send(response)
            })
            .catch(error =>{
                res.status(400).send('algo salio mal')
            })
    },
    actualizar:(req,res)=>{
        Tarea.findByIdAndUpdate(req.params.id,req.body, {new:true})
            .then(response =>{
                res.send(response)
            })
            .catch(error =>{
                res.status(400).send('algo salio mal')
            })
    },
    eliminar:(req,res)=>{
        Tarea.findByIdAndDelete(req.params.id)
            .then(response => {
                res.send(response)
            })
            .catch(error =>{
                res.status(400).send('algo salio mal')
            })
    }
}


//module.exports = {getTarea, getTareaID, putTarea, postTarea}
module.exports = TareasController