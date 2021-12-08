
const {Schema, model, isValidObjectId} = require('mongoose');

const CitaSchema = Schema({
    idCliente:{
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true    
    },
    idCupo:{
        type: String
    },
    idSede:{
        type: String
    },
    idOdontologo:{
        type: String
    },
    tipoCita:{
        type: Schema.Types.ObjectId,
        ref: 'tipoCita',
        required: true
    }
});
module.exports = model('cita', CitaSchema)