
const {Schema, model, isValidObjectId} = require('mongoose');

const CitaSchema = Schema({
    idCliente:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true    
    },
    idCupo:{
        type: Schema.Types.ObjectId,
        ref: 'Cupo',
        required: true
    },
    idSede:{
        type: Schema.Types.ObjectId,
        ref: 'Sede',
        required: true
    },
    idOdontologo:{
        type: Schema.Types.ObjectId,
        ref: 'Odontologo',
        required: true
    },
    tipoCita:{
        type: Schema.Types.ObjectId,
        ref: 'TipoCita',
        required: true
    }
});
module.exports = model('cita', CitaSchema)