const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({
    dia: {
        type: Schema.Types.ObjectId,
        ref: 'dia',
        required: true
    },
    idCupos:[{
        cupo: {
            type: Schema.Types.ObjectId,
            ref: 'cupo',
        }
    }],
    idOdontologo:{
        type: Schema.Types.ObjectId,
        ref: 'odontologo',
        required: true
    }
});

module.exports = model('horario', HorarioSchema)