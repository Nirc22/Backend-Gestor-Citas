const { Schema, model, } = require('mongoose');

const DiaSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
});

module.exports = model('dia', DiaSchema)