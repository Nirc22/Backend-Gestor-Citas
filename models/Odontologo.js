const { Schema, model } = require('mongoose');

const OdontologoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: Number,
        required: true
    },
    documento: {
        type: Number,
        required: true,
        unique: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    idEspecializacion:{
        type: Schema.Types.ObjectId,
        ref: 'especializacion',
        required: true 
    },
    idHorario:{
        type: Schema.Types.ObjectId,
        ref: 'horario',
        required: true 
    },
    idSede:{
        type: Schema.Types.ObjectId,
        ref: 'sede',
        required: true 
    }
});

module.exports = model('odontologo', OdontologoSchema)