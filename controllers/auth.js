const { response } = require('express');

const crearUsuario = async (req, resp = response) => {}

const loginUsuario = async (req, resp = response) => {}

const revalidarToken = async (req, resp = response) => {}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}