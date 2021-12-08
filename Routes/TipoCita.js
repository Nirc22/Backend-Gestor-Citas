const {Router, response} = require('express');
const {getTipoCita, crearTipoCita, actualizarTipoCita, eliminarTipoCita} = require('../controllers/TipoCita');
const router = Router();

router.get('/listar', getTipoCita);

router.post('/crear', crearTipoCita);

router.put('/actualizar/:id', actualizarTipoCita);

router.delete('/eliminar/:id', eliminarTipoCita);

module.exports = router;