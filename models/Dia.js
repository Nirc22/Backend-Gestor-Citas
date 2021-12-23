const { Schema, model, } = require('mongoose');

const PerfilSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
  
},
    {
        collection: 'dias'
    }
);

module.exports = model('dia', PerfilSchema)