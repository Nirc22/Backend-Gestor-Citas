const { response } = require('express');
const Rol = require('../models/Rol');


/**getRol */

const getRol = async (req, resp = response) => {
    try {

        const rol = await Rol.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de roles',
            rol
        });
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear roles',
        });
    }
}

/**crearRol */

const crearRol = async (req, resp) => {

    const rol = new Rol(req.body);
    console.log(rol);
    console.log(req.body);
    return;


    try {
        const rolSave = await rol.save();
        resp.status(201).json({
            ok: true,
            msg: 'Rol creada de manera exitosa',
            rolSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear rol',
        });
    }
}

/**actualizarRol */

const actualizarRol = async (req, resp = response) => {

    const rolId = req.params.id;

    try {
        
        const rol = await Rol.findById(rolId);

        if(!rol) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del rol no coincide con ningun elemento en la base de datos',
            });
        }

        const rolActualizado = await Sede.findByIdAndUpdate(rolId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Rol actualizado de manera exitosa',
            rol: rolActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al actualizar la sede',
        });
    }
}



module.exports = {
    getRol,
    crearRol,
    actualizarRol,
};