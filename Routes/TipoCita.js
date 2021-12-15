const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');

const {getTipoCita, crearTipoCita, actualizarTipoCita, eliminarTipoCita} = require('../controllers/TipoCita');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

//Aplicar validación a todas las rutas
router.use(validarJWT);

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