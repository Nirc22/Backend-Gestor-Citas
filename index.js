const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use('/api/auth', require('./Routes/auth'));
app.use('/api/cita', require('./Routes/Cita'));

app.listen(process.env.Port, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`)
});
