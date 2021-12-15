const {Router, response} = require('express');
const { check } = require('express-validator');
const {getCita, crearCita, actualizarCita, eliminarCita} = require('../controllers/Cita');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.get('/listar', getCita);

router.post(
    '/crear', 
    [
        check('idCliente','El id del cliente es obligatorio').not().isEmpty(),
        check('idCupo','El id del cupo es obligatorio').not().isEmpty(),
        check('idSede','El id de la sede es obligatoria').not().isEmpty(),
        check('idOdontolog','El id del odontologo es obligatorio').not().isEmpty(),
        check('tipoCita', 'El tipo de cita es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearCita);

router.put(
    '/actualizar/:id', 
    [
        check('idCliente','El id del cliente es obligatorio').not().isEmpty(),
        check('idCupo','El id del cupo es obligatorio').not().isEmpty(),
        check('idSede','El id de la sede es obligatoria').not().isEmpty(),
        check('idOdontolog','El id del odontologo es obligatorio').not().isEmpty(),
        check('tipoCita', 'El tipo de cita es obligatoria').not().isEmpty(),
        validarCampos
    ],
    actualizarCita);

router.delete('/eliminar/:id', eliminarCita);

module.exports = router;