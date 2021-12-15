const {Router} = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const {getCita, crearCita, actualizarCita, eliminarCita} = require('../controllers/Cita');

const router = Router();

// Validar token
router.use(validarJWT);

router.get('/listar', getCita);

router.post(
    '/crear', 
    [
        check('idCliente','El id del cliente es obligatorio').not().isEmpty(),
        check('idCupo','El id del cupo es obligatorio').not().isEmpty(),
        check('idSede','El id de la sede es obligatoria').not().isEmpty(),
        check('idOdontologo','El id del odontologo es obligatorio').not().isEmpty(),
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
        check('idOdontologo','El id del odontologo es obligatorio').not().isEmpty(),
        check('tipoCita', 'El tipo de cita es obligatoria').not().isEmpty(),
        validarCampos
    ],
    actualizarCita);

router.delete('/eliminar/:id', eliminarCita);

module.exports = router;