const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: Number,
        required: true
    },
    documento: {
        type: Number,
        required: true,
        unique: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        default:'61b0b72e0d037f1278c80f01',
        required: true
    }
    // idToken:{
    //     type: String
    // }
});

module.exports = model('usuario', UsuarioSchema)