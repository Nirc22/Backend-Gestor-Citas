const { Router, response } = require('express');
const router = Router();

//Controllers
const { getRol, crearRol, actualizarRol } = require('../controllers/rol');


//Rutas

router.get('/', getRol);

router.post('/create', crearRol);

router.put('/update', actualizarRol);



module.exports = router;