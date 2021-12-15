const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Controllers
const { getHClinica, crearHClinica, actualizarHClinica} = require('../controllers/historiaClinica');

//Aplicar validación a todas las rutas
router.use(validarJWT);

//Rutas

router.get('/', getHClinica);

router.post('/create', crearHClinica);

router.put('/update', actualizarHClinica);



module.exports = router;