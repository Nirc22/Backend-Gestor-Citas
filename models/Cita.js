
const {Schema, model, isValidObjectId} = require('mongoose');

const CitaSchema = Schema({
    idCliente:{
        type: Schema.Types.ObjectId,
        ref: 'usuario',
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
    },
    idOdontologo:{
        type: Schema.Types.ObjectId,
        ref: 'odontologo',
        required: true
    },
    tipoCita:{
        type: Schema.Types.ObjectId,
        ref: 'tipoCita',
        required: true
    }
});
module.exports = model('cita', CitaSchema)