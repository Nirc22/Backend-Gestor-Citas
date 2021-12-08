const {response} = require('express');

const Cita = require('../models/Cita');

const getCita = async (req, resp = response) => {}

const crearCita = async (req, resp = response) => {}

const actualizarCita = async (req, resp = response) => {}

const eliminarCita = async (req, resp = response) => {}

module.exports = {
    getCita,
    crearCita,
    actualizarCita,
    eliminarCita
};