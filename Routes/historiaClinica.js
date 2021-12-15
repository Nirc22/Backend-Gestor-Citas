const { check } = require('express-validator');
const { Router } = require('express');
const router = Router();

const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getHClinica, crearHClinica, actualizarHClinica} = require('../controllers/historiaClinica');
const { validarCampos } = require('../middlewares/validar-campos');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas

router.get('/', getHClinica);

router.post(
    '/create', 
    [
        check('idUsuario','El id del usuario es obligatorio').not().isEmpty(),
        check('idCitaCliente','El id de la cita es obligatoria').not().isEmpty(),
        check('observacion','Se debe ingresar una observacion del tratamiento realizado').not().isEmpty(),
        validarCampos
    ],
    crearHClinica);

router.put(
    '/update/:id', 
    [
        check('idUsuario','El id del usuario es obligatorio').not().isEmpty(),
        check('idCitaCliente','El id de la cita es obligatoria').not().isEmpty(),
        check('observacion','Se debe ingresar una observacion del tratamiento realizado').not().isEmpty(),
        validarCampos
    ],
    actualizarHClinica);



module.exports = router;