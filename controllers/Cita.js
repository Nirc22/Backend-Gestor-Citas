const { response } = require('express');

const Cita = require('../models/Cita');

const getCita = async (req, resp = response) => {
    const citas = await Cita.find()
                            .populate('idSede')
                            .populate('tipoCita')

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Citas',
        citas
    });
}

const crearCita = async (req, resp = response) => { 
    
    const cita = new Cita(req.body);

    try {
        const citaSave = await cita.save();
        resp.status(201).json({
            ok: true,
            msg: 'Cita creada de manera exitosa',
            citaSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear la cita',
        });
    }
}

const actualizarCita = async (req, resp = response) => { 
    
    const citaId = req.params.id;

    try {
        
        const cita = await Cita.findById(citaId);

        if(!cita) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la cita no coincide con ningun elemento en la base de datos',
            });
        }

        const citaActualizada = await Cita.findByIdAndUpdate(citaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Cita actualizada de manera exitosa',
            cita: citaActualizada
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al actualizar la cita',
        });
    }
}

const eliminarCita = async (req, resp = response) => { 
    
    const citaId = req.params.id;

    try {
        
        const cita = await Cita.findById(citaId);

        if(!cita) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la cita no coincide con ningun elemento en la base de datos',
            });
        }

        await Cita.findByIdAndDelete(citaId);

        resp.json({
            ok: true,
            msg: 'Cita eliminada de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al eliminar la cita',
        });
    }
}

module.exports = {
    getCita,
    crearCita,
    actualizarCita,
    eliminarCita
};