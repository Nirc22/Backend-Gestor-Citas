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
    password:{
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    idEspecializacion:{
        type: Schema.Types.ObjectId,
        ref: 'Especializacion',
        required: true 
    },
    idCupo:{
        type: Schema.Types.ObjectId,
        ref: 'cupo',
        required: true 
    },
    idSede:{
        type: Schema.Types.ObjectId,
        ref: 'sede',
        required: true 
    }
});

module.exports = model('odontologo', OdontologoSchema)