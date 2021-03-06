const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use('/api/auth', require('./Routes/auth.js'));

app.listen(process.env.Port, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`)
});
