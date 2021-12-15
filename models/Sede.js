const { Schema, model } = require('mongoose');

const SedeSchema = Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    direccion:{
        type: String,
        required: true,
        unique: false
    },
    telefono: {
        type: Number,
        required: true,
        unique: false
    },
    horario: {
        type: String,
        required: true,
        unique: false
    },
    estado: {
        type: Boolean,
        default: true,
        unique: false
    },

},
{
    collection: 'sedes'
});

module.exports = model('sede', SedeSchema)