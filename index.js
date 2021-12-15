const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());

app.use('/api/auth', require('./Routes/auth'));
app.use('/api/rol', require('./Routes/rol'));
app.use('/api/sede', require('./Routes/sede'));
app.use('/api/hclinica', require('./Routes/historiaClinica'));
app.use('/api/cita', require('./Routes/Cita'));
app.use('/api/tipoCita', require('./Routes/TipoCita'));
app.use('/api/odontologo',require('./Routes/odontologo'));
app.use('/api/especializacion',require('./Routes/especializacion'));
app.use('/api/horario', require('./Routes/horario'));
app.use('/api/cupo', require('./Routes/cupo'));

app.listen(process.env.Port, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`);
});
