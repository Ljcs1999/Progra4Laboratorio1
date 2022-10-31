const {Router} = require('express');
const { getenvios, postenvios, putenvios, deleteenvios } = require('../controllers/envios');
const router = Router();

router.get('/', getenvios)
router.post('/', postenvios)
router.put('/:id', putenvios)
router.delete('/:id', deleteenvios)

module.exports = router