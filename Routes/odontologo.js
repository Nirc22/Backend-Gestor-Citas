const { Router, response } = require('express');
const router = Router();

//Controllers
const { getOdontologo, crearOdontologo, actualizarOdontologo, } = require('../controllers/odontologo');


//Rutas

router.get('/', getOdontologo);

router.post('/create', crearOdontologo);

router.put('/update', actualizarOdontologo);



module.exports = router;