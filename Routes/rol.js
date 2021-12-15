const { Router, response } = require('express');
const { check } = require('express-validator');
const router = Router();

//Controllers
const { getRol, crearRol, actualizarRol } = require('../controllers/rol');
const { validarCampos } = require('../middlewares/validar-campos');


//Rutas

router.get('/', getRol);

router.post(
    '/create', 
    [
        check('nombre','El nombre del rol es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearRol);

router.put(
    '/update/:id', 
    [
        check('nombre','El nombre del rol es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarRol);



module.exports = router;