const {response, request} = require('express');

const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const validarJWT = async (req = request, res = response, next) => {

    let token = '';
    token = req.headers['x-access-token'] || req.headers['authorization'];

    if(!token) {
        res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRET_KEY);

        //Leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        if(!usuario) {
            res.status(401).json({
                ok: true,
                msg: 'Token no valido'
            })
        }

        req.usuario = usuario;

    } catch (error) {
        console.log(error);
        res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }

    next();
}

module.exports = {
    validarJWT
}