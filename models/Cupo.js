const { Schema, model } = require('mongoose');

const CupoSchema = Schema({
    horaInicio: {
        type: Date,
        required: true,
    },
    horaFin: {
        type: Date,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    idHorario: {
        type: Schema.Types.ObjectId,
        ref: 'horario',
        required: true 
    }
});

module.exports = model('cupo', CupoSchema)