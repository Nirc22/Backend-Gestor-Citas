const { Router, response } = require('express');
const router = Router();

//Controllers
const { getHClinica, crearHClinica, actualizarHClinica} = require('../controllers/historiaClinica');


//Rutas

router.get('/', getHClinica);

router.post('/create', crearHClinica);

router.put('/update/:id', actualizarHClinica);



module.exports = router;