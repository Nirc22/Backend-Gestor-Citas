const { Schema, model, } = require('mongoose');

const EspecializacionSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
},
{
    collection: 'especializaciones'
});

module.exports = model('especializacion', EspecializacionSchema)