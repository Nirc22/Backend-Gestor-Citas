const { Router, response } = require('express');
const router = Router();

//Controllers
const { getSede, crearSede, actualizarSede, } = require('../controllers/sede');


//Rutas

router.get('/', getSede);

router.post('/create', crearSede);

router.put('/update', actualizarSede);



module.exports = router;