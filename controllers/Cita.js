const { response } = require('express');

const Cita = require('../models/Cita');
const Cupo = require('../models/Cupo');
const Horario = require('../models/Horario');

/* Listar citas*/
const getCita = async (req, resp = response) => {

    try {
        const citas = await Cita.find()
                                    .populate('idCupo')
                                    .populate('idSede', 'nombre')
                                    .populate('tipoCita','nombre')
                                    .populate('idOdontologo',['nombre','apellidos','idEspecializacion'])
                                    .populate('idCliente', ['nombre','apellidos','email','telefono','documento','fechaNacimiento'])

        resp.status(200).json({
            ok: true,
            msg: 'Lista de Citas',
            citas
        });
    }
    catch(error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al listar citas',
        });
    }
}

/* Crear Citas */
const crearCita = async (req, resp = response) => { 

    try {
        const cita = new Cita(req.body);
        const { idCupo, idOdontologo,idDia } = req.body;

        let citas = await Cita.findOne({idCupo,idOdontologo});
        console.log(citas);

       /* if(citas){
            return resp.status(400).json({
                ok: false,
                msg: 'No hay cupo'
            })
        }
        const citaSave = await cita.save();
        
        let cupo = await Cupo.findById( idCupo );
        cupo.estado = !cupo.estado;

        await Cupo.findByIdAndUpdate(idCupo, cupo, {new: true});

        resp.status(201).json({
            ok: true,
            msg: 'Cita creada de manera exitosa',
            citaSave
        });*/

    } catch(error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear la cita',
        });
    }
}

const actualizarCita = async (req, resp = response) => { 

    try {
        const citaId = req.params.id;
        const cita = await Cita.findById(citaId);

        if(!cita) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la cita no coincide con ningun elemento en la base de datos',
            });
        }

        const citaActualizada = await Cita.findByIdAndUpdate(citaId, req.body, { new: true });

        resp.status(200).json({
            ok: true,
            msg: 'Cita actualizada de manera exitosa',
            cita: citaActualizada
        });


    } catch(error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al actualizar la cita',
        });
    }
}

const eliminarCita = async (req, resp = response) => { 

    try {
        const citaId = req.params.id;
        const cita = await Cita.findById(citaId);

        if(!cita) {
            resp.status(404).json({
                ok: false,
                msg: 'El id de la cita no coincide con ningun elemento en la base de datos',
            });
        }

        await Cita.findByIdAndDelete(citaId);

        resp.status(200).json({
            ok: true,
            msg: 'Cita eliminada de manera exitosa'
        });


    } catch(error) {
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