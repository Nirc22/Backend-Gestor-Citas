const { Schema, model } = require('mongoose');

const H_ClinicaSchema = Schema({
    idUsuario:{
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: [true, 'El usuario es obligatorio'] 
    },
    idCita:{
        type: Schema.Types.ObjectId,
        ref: 'cita',
        required: [true, 'la cita es obligatoria'] 
    },
    observacion: {
        type: Array,
        required: [true, 'la observación es obligatorio']
    },
},
{
    collection: 'historiasClinicas'
});

module.exports = model('h_clinica', H_ClinicaSchema)