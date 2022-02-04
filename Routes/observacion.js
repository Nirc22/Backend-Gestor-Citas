const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getObservacion, crearObservacion, actualizarObservacion, getObservacionByID } = require('../controllers/observacion');
const { validarCampos } = require('../middlewares/validar-campos');
const { check } = require('express-validator');
const { OndontoRole } = require('../middlewares/validar-roles');


//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas
router.get('/', OndontoRole, getObservacion);

router.get('/:id', OndontoRole, getObservacionByID);

router.post(
    '/create', 
    [
        check('observacion','La observacion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    OndontoRole,
    crearObservacion);

router.put(
    '/update/:id', 
    [
        check('observacion','La observacion es obligatoria').not().isEmpty(),
        validarCampos
    ],
    OndontoRole,
    actualizarObservacion);

module.exports = router;