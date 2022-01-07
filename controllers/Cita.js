const { response } = require('express');

const Cita = require('../models/Cita');
const Cupo = require('../models/Cupo');
const Horario = require('../models/Horario');

/* Listar citas*/
const getCita = async (req, resp = response) => {

    try {
        const citas = await Cita.find()
                                    .populate('idHorario','fecha')
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
        const { idHorario, idOdontologo, idCupo } = req.body;

        let citas = await Cita.findOne({idHorario,idOdontologo,idCupo});
        console.log("c " + citas);

        if(citas){
            return resp.status(400).json({
                ok: false,
                msg: 'No hay cupo'
            })
        }
        const citaSave = await cita.save();
        
        let horario = await Horario.findById(idHorario);

        const {idCupos} = horario;
        const cupoNuevo = idCupos.filter(e => e.cupo != idCupo);
        horario.idCupos = cupoNuevo;
        
        await Horario.findByIdAndUpdate(idHorario, horario, {new: true});

        resp.status(201).json({
            ok: true,
            msg: 'Cita creada de manera exitosa',
            citaSave
        });

    } catch(error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear la cita',
        });
    }
}
/* Actualizar es sinónimo de reasignar XD*/
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

        const { idHorario, idOdontologo, idCupo } = req.body;
        let citas = await Cita.findOne({idHorario,idOdontologo,idCupo});

        if(citas){
            return resp.status(400).json({
                ok: false,
                msg: 'No hay cupo'
            })
        }

        const citaActualizada = await Cita.findByIdAndUpdate(citaId, req.body, { new: true });

        //Volver a crear horario viejo 
        
        let idCupos = [ {"cupo": cita.idCupo}]
        const id = cita.idHorario;

        console.log(idCupos)
        
        const horarioActualizado = await Horario.findByIdAndUpdate(id, idCupos, {new: true});
        console.log(horarioActualizado)

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

const getCitaByOdonto = async (req, resp = response) => {

    try {
        const {idOdontologo} = req.params;
        const citas = await Cita.find({idOdontologo: idOdontologo})
                                    .populate('idHorario','fecha')
                                    .populate('idCupo')
                                    .populate('idSede', 'nombre')
                                    .populate('tipoCita','nombre')
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

module.exports = {
    getCita,
    crearCita,
    actualizarCita,
    eliminarCita,
    getCitaByOdonto
};