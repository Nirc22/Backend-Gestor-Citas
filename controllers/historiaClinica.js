const { response } = require('express');
const HistoriaClinica = require('../models/HistoriaClinica');


/**getHClinica */

const getHClinica = async (req, resp = response) => {
    try {

        const hClinica = await HistoriaClinica.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de historias clinicas',
            hClinica
        });
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear la historia clinica',
        });
    }
}

/**crearHClinica */

const crearHClinica = async (req, resp = response) => {

    const hClinica = new HistoriaClinica(req.body);
    //console.log(hClinica)

    try {
        const hClinicaSave = await hClinica.save();
        resp.status(201).json({
            ok: true,
            msg: 'Historia clinica creada de manera exitosa',
            hClinicaSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear la historia clinica',
        });
    }
}

/**actualizarHClinica */

const actualizarHClinica = async (req, resp = response) => {

    const hClinicaId = req.params.id;

    try {
        
        const hClinica = await HistoriaClinica.findById(hClinicaId);

        if(!hClinica) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la historia clinica no coincide con ningun elemento en la base de datos',
            });
        }

        const HclinicaActualizada = await HistoriaClinica.findByIdAndUpdate(hClinicaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'historia clinica actualizada de manera exitosa',
            hclinica: HclinicaActualizada
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
    getHClinica,
    crearHClinica,
    actualizarHClinica,
};