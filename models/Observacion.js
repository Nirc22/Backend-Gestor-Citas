const { Schema, model } = require('mongoose');

const ObservacionesSchema = Schema({
    idCita:{
        type: Schema.Types.ObjectId,
        ref: 'cita',
        required: [true, 'la cita es obligatoria'] 
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