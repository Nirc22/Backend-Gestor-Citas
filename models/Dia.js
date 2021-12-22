const { Schema, model, } = require('mongoose');

const PerfilSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
});

module.exports = model('dia', PerfilSchema)