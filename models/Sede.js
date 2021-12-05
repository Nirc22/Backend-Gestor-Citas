const { Schema, model } = require('mongoose');

const SedeSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    horario: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: true
    },

},
{
    collection: 'sedes'
});

module.exports = model('sede', SedeSchema)