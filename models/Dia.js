const { Schema, model, } = require('mongoose');

const DiaSchema = Schema({
    nombre: {
        type: String,
        required: true
    }
  
},
    {
        collection: 'dias'
    }
);

module.exports = model('dia', DiaSchema)