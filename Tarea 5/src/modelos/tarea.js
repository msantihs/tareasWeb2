
//EL NUEVO Y FRESCO
const {Schema,model} = require('mongoose')

const tareaSchema = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    status: {type: String ,default: 'new'},
    fechaCreacion: {type: Date}
});

module.exports = model('tareas',tareaSchema) //todo lo que este en 'tareas' debe tener la forma del schema 
