const { response } = require('express');
const Observacion = require('../models/Observacion');

/**getEspecializacion */
const getObservacion = async (req, resp = response) => {
    try {
        const observacion = await Observacion.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de observaciones',
            observacion
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            msg: 'error al listar observaciones',
        });
    }
}

/**getEspecializacion */
const getObservacionByID = async (req, resp = response) => {
    try {
        const idCita = req.params.id;
        const observacion = await Observacion.find({idCita});
        resp.status(200).json({
            ok: true,
            msg: 'Lista de observaciones',
            observacion
        });
    }
    catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            msg: 'error al listar observaciones',
        });
    }
}


/**crearEspecializacion */
const crearObservacion = async (req, resp) => {
    try {
        const observacion = new Observacion(req.body);
        const observacionSave = await observacion.save();
        resp.status(200).json({
            ok: true,
            msg: 'Observación creada de manera exitosa',
            observacion: observacionSave
        });
    } catch (error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            msg: 'Error al crear observación',
        });
    }
}

/**actualizarEspecializacion */
const actualizarObservacion = async (req, resp = response) => {
    try {
        const observacionId = req.params.id;
        const observacion = await Observacion.findById(observacionId);

        if (!observacion) {
            resp.status(201).json({
                ok: false,
                msg: 'El id de la observación no coincide con ningun elemento en la base de datos',
            });
        }

        const observacionActualizado = await Observacion.findByIdAndUpdate(observacionId, req.body, { new: true });

        resp.status(200).json({
            ok: true,
            msg: 'Observación actualizada exitosamente',
            observacion: observacionActualizado
        });
    } catch(error) {
        console.log(error);
        resp.status(400).json({
            ok: false,
            msg: 'error al actualizar la observación',
        });
    }
}


module.exports = {
    getObservacion,
    crearObservacion,
    actualizarObservacion,
    getObservacionByID
};