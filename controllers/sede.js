const { response } = require('express');
const Sede = require('../models/Sede');


/**getSede */

const getSede = async (req, resp = response) => {

    const sedes = await Sede.find();
    try{
        resp.status(200).json({
            ok: true,
            msg: 'Lista de sedes',
            sedes
        });
        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al obtener las sedes',
        });
    }
}

/**crearSede */

const crearSede = async (req, resp) => {

    const sede = new Sede(req.body);
    const { nombre } = req.body;

    try {
        let sedes = await Sede.findOne({nombre});
        if(sedes){
            return resp.status(400).json({
                ok: false,
                msg: 'Ya existe una sede con ese nombre'
            })
        }
        const sedeSave = await sede.save();
        resp.status(201).json({
            ok: true,
            msg: 'Sede creada de manera exitosa',
            sedeSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear la sede',
        });
    }
}

/**actualizarSede */

const actualizarSede = async (req, resp = response) => {

    const sedeId = req.params.id;

    try {

        const sede = await Sede.findById(sedeId);

        if (!sede) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la sede no coincide con ningun elemento en la base de datos',
            });
        }

        const sedeActualizada = await Sede.findByIdAndUpdate(sedeId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Sede actualizada de manera exitosa',
            sede: sedeActualizada
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
    getSede,
    crearSede,
    actualizarSede
};