const { Schema, model } = require('mongoose');

const H_ClinicaSchema = Schema({
    idUsuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true 
    },
    idCitaCliente:{
        type: Schema.Types.ObjectId,
        ref: 'CitaCliente',
        required: true 
    },
    observacion: {
        type: String,
        required: true
    },
},
{
    collection: 'historiasClinicas'
});

module.exports = model('h_clinica', H_ClinicaSchema)