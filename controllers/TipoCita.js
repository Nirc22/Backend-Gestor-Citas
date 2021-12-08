const { response } = require('express');
const TipoCita = require('../models/TipoCita');

const getTipoCita = async (req, resp = response) => {
    const tipoCitas = await TipoCita.find();

    resp.status(200).json({
        ok: true,
        msg: 'Lista de tipo de citas',
        tipoCitas
    });
}

const crearTipoCita = async (req, resp = response) => { 
    
    const tipoCita = new TipoCita(req.body);

    try {
        const tipoCitaSave = await tipoCita.save();
        resp.status(201).json({
            ok: true,
            msg: 'Tipo cita creada de manera exitosa',
            tipoCitaSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear el tipo de cita',
        });
    }
}

const actualizarTipoCita = async (req, resp = response) => { 
    
    const tipoCitaId = req.params.id;

    try {
        
        const tipoCita = await TipoCita.findById(tipoCitaId);

        if(!tipoCita) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del tipo cita no coincide con ningun elemento en la base de datos',
            });
        }

        const tipoCitaActualizada = await TipoCita.findByIdAndUpdate(tipoCitaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Tipo cita actualizada de manera exitosa',
            tipoCita: tipoCitaActualizada
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al actualizar el tipo cita',
        });
    }
}

const eliminarTipoCita = async (req, resp = response) => { 
    
    const tipoCitaId = req.params.id;

    try {
        
        const tipoCita = await TipoCita.findById(tipoCitaId);

        if(!tipoCita) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del tipo cita no coincide con ningun elemento en la base de datos',
            });
        }

        await Cita.findByIdAndDelete(tipoCita);

        resp.json({
            ok: true,
            msg: 'El tipo cita eliminada de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al eliminar el tipo cita',
        });
    }
}

module.exports = {
    getCita,
    crearTipoCita,
    actualizarTipoCita,
    eliminarTipoCita
};