const { response } = require('express');

const Cupo = require('../models/Cupo');

const obtenerCupos = async (req, resp = response) => {
    const cupos = await Cupo.find().populate('idHorario');

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Cupos',
        cupos
    });
}

const obtenerCupo = async (req, resp = response) => {
    const idHorario = req.params.id;
    const cupo = await Cupo.find({idHorario}).populate('idHorario');

    if(!cupo){
        resp.status(404).json({
            ok: false,
            msg: 'El id del horario no coincide con ningun elemento en la base de datos'
        });
    }

    resp.status(200).json({
        ok: true,
        msg: 'Cupo por Id',
        cupo
    });
}

const crearCupo = async (req, resp = response) => {
    const cupo = new Cupo(req.body);
    console.log(cupo)

    try {
        const cupoSave = await cupo.save();
        resp.status(201).json({
            ok: true,
            msg: 'Cupo creado de manera exitosa',
            cupoSave
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear el cupo',
        })
    }
}

const actualizarCupo = async (req, resp = response) => {
    const cupoId = req.params.id;

    try {
        const cupo = await Cupo.findById(cupoId);

        if(!cupo){
            resp.status(404).json({
                ok: false,
                msg: 'El id del cupo no coincide con ningun elemento en la base de datos',
            });
        }

        const cupoActualizado = await Cupo.findByIdAndUpdate(cupoId, req.body, {new: true});

        resp.json({
            ok: true,
            msg: 'Cupo actualizado de manera exitosa',
            cupo: cupoActualizado
        })
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al actualizar el cupo',
        });
    }
}

const eliminarCupo = async (req, resp = response) => {
    const cupoId = req.params.id;

    try {
        const cupo = await Cupo.findById(cupoId);

        if(!cupo){
            resp.status(404).json({
                ok: false,
                msg: 'El id del cupo no coincide con ningun elemento en la base de datos',
            });
        }

        await Cupo.findByIdAndDelete(cupoId);

        resp.json({
            ok: true,
            msg: 'Cupo eliminado de manera exitosa',
        })
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al eliminar el cupo',
        });
    }
} 

module.exports = {
    obtenerCupo,
    obtenerCupos,
    crearCupo,
    actualizarCupo,
    eliminarCupo
}