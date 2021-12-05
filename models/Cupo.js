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
        required: true
    },
    idHorario: {
        type: Schema.Types.ObjectId,
        ref: 'horario',
        required: true 
    }
});

module.exports = model('cupo', CupoSchema)