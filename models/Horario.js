const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({
    Dia: {
        type: Schema.Types.ObjectId,
        ref: 'dia',
        required: true
    },
    idCupos:[{
        cupos:{
            type: Schema.Types.ObjectId,
            ref: 'cupo',
            required: true
        }
    }],
    idOdontologo:{
        type: Schema.Types.ObjectId,
        ref: 'odontologo',
        required: true
    }
});

module.exports = model('horario', HorarioSchema)