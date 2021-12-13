const { Schema, model } = require('mongoose');

const CupoSchema = Schema({
    horaInicio: {
        type: Date,
        required: true,
        unique: true
    },
    horaFin: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        default: true
    },
    idHorario: {
        type: Schema.Types.ObjectId,
        ref: 'Horario',
        required: true 
    }
});

module.exports = model('cupo', CupoSchema)