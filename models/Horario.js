const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({
    fechaHoraInicio: {
        type: Date,
        required: true
    },
<<<<<<< HEAD
    fechaHoraFin:{
=======
    fechaFin:{
        type: Date,
        required: true
    },
    horaInicio: {
        type: Date,
        required: true,
    },
    horaFin: {
>>>>>>> CambiosStephania
        type: Date,
        required: true
    },
});

module.exports = model('horario', HorarioSchema)