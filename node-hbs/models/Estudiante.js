var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    codigo: {type: Number, required: true},
    nombre: {type: String, required: true, max: 20},
    correo: {type: String, required: true, max: 30},
    edad: {type: Number, required: true, max:150},
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
