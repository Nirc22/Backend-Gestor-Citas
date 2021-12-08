const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin:{
        type: Date,
        required: true
    },
    horaInicio: {
        type: Date,
        required: true,
        unique: true
    },
    horaFin: {
        type: Date,
        required: true
    },
});

module.exports = model('horario', HorarioSchema)