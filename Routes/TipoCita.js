const {Router, response} = require('express');
const { check } = require('express-validator');
const {getTipoCita, crearTipoCita, actualizarTipoCita, eliminarTipoCita} = require('../controllers/TipoCita');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.get('/listar', getTipoCita);

router.post(
    '/crear', 
    [
        check('nombre','El nombre del tipo de cita es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearTipoCita);

router.put(
    '/actualizar/:id', 
    [
        check('nombre','El nombre del tipo de cita es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarTipoCita);

router.delete('/eliminar/:id', eliminarTipoCita);

module.exports = router;