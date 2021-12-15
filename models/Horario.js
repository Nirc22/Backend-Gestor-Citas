const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({
    fechaHoraInicio: {
        type: Date,
        required: true
    },
    fechaHoraFin:{
        type: Date,
        required: true
    },
});

module.exports = model('horario', HorarioSchema)