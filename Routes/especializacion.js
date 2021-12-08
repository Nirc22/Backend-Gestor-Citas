const { Router, response } = require('express');
const router = Router();

//Controllers
const { getEspecializacion, crearEspecializacion, actualizarEspecializacion, } = require('../controllers/especializacion');


//Rutas

router.get('/', getEspecializacion);

router.post('/create', crearEspecializacion);

router.put('/update', actualizarEspecializacion);



module.exports = router;