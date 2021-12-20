const { Schema, model } = require('mongoose');

const CupoSchema = Schema({
    horaInicio: {
        type: Date,
        required: true,
    },
    horaFin: {
        type: Date,
        required: true
    }
});

module.exports = model('cupo', CupoSchema)