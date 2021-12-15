const { Router, response } = require('express');
const { check } = require('express-validator');
const router = Router();

//Controllers
const { getHClinica, crearHClinica, actualizarHClinica} = require('../controllers/historiaClinica');
const { validarCampos } = require('../middlewares/validar-campos');


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
    '/update', 
    [
        check('idUsuario','El id del usuario es obligatorio').not().isEmpty(),
        check('idCitaCliente','El id de la cita es obligatoria').not().isEmpty(),
        check('observacion','Se debe ingresar una observacion del tratamiento realizado').not().isEmpty(),
        validarCampos
    ],
    actualizarHClinica);



module.exports = router;