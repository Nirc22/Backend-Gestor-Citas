const { response } = require('express');
const Especializacion = require('../models/Especializacion');
const especializacion = require('../models/Especializacion');


/**getEspecializacion */

const getEspecializacion = async (req, resp = response) => {
    try {

        const especializacion = await Especializacion.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de especializaciones',
            rol
        });
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear especializaciones',
        });
    }
}

/**crearEspecializacion */

const crearEspecializacion = async (req, resp) => {

    const especializacion = new Especializacion(req.body);
    console.log(especializacion);
    console.log(req.body);
    return;


    try {
        const especializacionSave = await especializacion.save();
        resp.status(201).json({
            ok: true,
            msg: 'Especializacion creada de manera exitosa',
            especializacionSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear especializacion',
        });
    }
}

/**actualizarEspecializacion */

const actualizarEspecializacion = async (req, resp = response) => {

    const especializacionId = req.params.id;

    try {
        
        const especializacion = await Especializacion.findById(especializacionId);

        if(!especializacion) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la especializacion no coincide con ningun elemento en la base de datos',
            });
        }

        const especializacionActualizado = await Especializacion.findByIdAndUpdate(especializacionId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Especializacion actualizada exitosamente',
            especializacion: especializacionActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al actualizar la especialización',
        });
    }
}



module.exports = {
    getEspecializacion,
    crearEspecializacion,
    actualizarEspecializacion
};