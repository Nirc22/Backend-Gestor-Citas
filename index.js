const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use('/api/auth', require('./Routes/auth'));
app.use('/api/rol', require('./Routes/rol'));
app.use('/api/sede', require('./Routes/sede'));
app.use('/api/hclinica', require('./Routes/historiaClinica'));
app.use('/api/cita', require('./Routes/Cita'));
app.use('/api/cita', require('./Routes/TipoCita'));

app.listen(process.env.Port, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`)
});
