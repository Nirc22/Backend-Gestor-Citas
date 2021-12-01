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
        ref: 'rol',
        //default: '6190420c33a8d9f6c73b4f57',
        required: true 
    },
    idToken:{
        type: String
    }
});

module.exports = model('usuario', UsuarioSchema)