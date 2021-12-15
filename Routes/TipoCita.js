const {Router} = require('express');
const {getTipoCita, crearTipoCita, actualizarTipoCita, eliminarTipoCita} = require('../controllers/TipoCita');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');

//Aplicar validación a todas las rutas
router.use(validarJWT);

router.get('/listar', getTipoCita);

router.post('/crear', crearTipoCita);

router.put('/actualizar/:id', actualizarTipoCita);

router.delete('/eliminar/:id', eliminarTipoCita);

module.exports = router;