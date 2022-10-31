const {Router} = require('express');
const { getpaquetes, postpaquetes, putpaquetes, deletepaquetes } = require('../controllers/paquetes');
const router = Router();

router.get('/', getpaquetes)
router.post('/', postpaquetes)
router.put('/:id', putpaquetes)
router.delete('/:id', deletepaquetes)

module.exports = router