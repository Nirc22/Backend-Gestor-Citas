const { response } = require('express');
const Odontologo = require('../models/Odontologo');


/**getOdontologo */

const getOdontologo = async (req, resp = response) => {
    try {

        const odontologo = await Odontologo.find();
        resp.status(200).json({
            ok: true,
            msg: 'Lista de odontologos',
            odontologo
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
    const {email, documento } = req.body;



    try { 
        let odonto = await Odontologo.findOne({documento});
        let odonto2 = await Odontologo.findOne({email});
        if (odonto) {
            return resp.status(400).json({
                ok: false,
                msg: 'Ya existe un odontologo registrado con ese documento'
            })
        }
        if(odonto2){
            return resp.status(400).json({
                ok: false,
                msg: 'Ya existe un odontologo registrado con ese email'
            })
        }
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
        const odontologoActualizado = await Odontologo.findByIdAndUpdate(odontologoId, req.body, {new: true});
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