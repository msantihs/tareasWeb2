const express = require('express')
const router = express.Router()
const tareaController = require('../controladores/tareas')


router.post('/',express.json(), tareaController.crear) //crear 
/**
 * @swagger
 * /tareas:
 *  post:
 *    description: crear una nueva tarea
 *    parameters:
 *      - in: body
 *        name: tarea
 *        description: objeto con los atributos de la tarea 
 *        schema:
 *          type: object
 *    responses:
 *      200:
 *        description: lista de tareas del usuario
 *      400: 
 *        description: error 
 */

router.put('/:id',express.json(),  tareaController.actualizar)//se usa para modificar y para delete tmbn 
/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *     description: Actualizar la tarea segun el ID 
 *     parameters:
 *      - in: path
 *        name: id
 *        description: el id de la tarea que queremos actualizar 
 *        schema:
 *          type: string
 *      - in: body
 *        name: tarea
 *        description: objeto tarea con las modificaciones deseadas 
 *        schema:
 *          type: object
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *       400:
 *         description: Error, no se pudieron obtener resultados
 *
 */

router.get('/', tareaController.listar) //get tarea
/**
 * @swagger
 * /tareas:
 *  get:
 *     description: Recuperar todas las tareas guardadas 
 *     responses:
 *       200:
 *         description: arreglo con todas las tareas 
 *       400:
 *         description: Error, no se pudieron obtener resultados
 *
 */

router.get('/:id', tareaController.ver) //get tarea id 

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *     description: Recuperar la tarea segun el id 
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: arreglo con todas las tareas 
 *       400:
 *         description: Error, no se pudieron obtener resultados
 *
 */

router.delete('/:id', tareaController.eliminar) //eliminar
/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *     description: eliminar la tarea segun el id  
 *     parameters:
 *      - in: path
 *        name: id
 *     responses:
 *       200:
 *         description: la tarea que fue borrada 
 *       400:
 *         description: Error, no se pudieron obtener resultados
 *
 */

module.exports = router