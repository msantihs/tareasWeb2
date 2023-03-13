const router = require('express').Router()
const rutasTareas = require('./tareas')
//const rutasUsuarios = require('./usuarios')
//const {auth} = require('./../middlewares')

//router.use('',auth) //creo que no se ocupa usar auth para la tarea 5
//si la ruta empieza con x cosa, ve al middleware 
router.use('/tareas',rutasTareas)
//router.use('/usuarios',rutasUsuarios)

module.exports = router;