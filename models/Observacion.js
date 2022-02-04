const { Schema, model } = require('mongoose');

const ObservacionesSchema = Schema({
    idHistoriaClinica:{
        type: Schema.Types.ObjectId,
        ref: 'h_clinica',
        required: [true, 'La historia clinica es obligatoria'] 
    },
    observacion: {
        type: String,
        required: [true, 'La observación es obligatoria'],
    },
    fecha: {
        type: String,
        default: Date.now()
    }
},{
    collection: "observaciones"
});

module.exports = model('observacion', ObservacionesSchema)