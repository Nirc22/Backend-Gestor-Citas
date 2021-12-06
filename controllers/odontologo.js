const { response } = require('express');
const odontologo = require('../models/Odontologo');


/**getOdontologo */

const getOdontologo = async (req, resp = response) => {
    try {

        const odontologo = await Odontologo.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de odontologos',
            rol
        });
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear odontologos',
        });
    }
}

/**crearOdontologo */

const crearOdontologo = async (req, resp) => {

    const odontologo = new Odontologo(req.body);
    console.log(odontologo);
    console.log(req.body);
    return;


    try {
        const odontologoSave = await odontologo.save();
        resp.status(201).json({
            ok: true,
            msg: 'Odontologo creado exitosamente',
            odontologoSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear odontologo',
        });
    }
}

/**actualizarOdontologo */

const actualizarOdontologo = async (req, resp = response) => {

    const odontologoId = req.params.id;

    try {
        
        const odontologo = await Odontologo.findById(odontologoId);

        if(!odontologo) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del odontologo no coincide con ningun elemento en la base de datos',
            });
        }

        const odontologoActualizado = await Odontologo.findfindByIdAndUpdate(odontologoId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Odontologo actualizado exitosamente',
            odontologo: odontologoActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al actualizar odontologo',
        });
    }
}



module.exports = {
    getOdontologo,
    crearOdontologo,
    actualizarOdontologo
};