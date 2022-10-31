const {Router} = require('express');
const { getseguimiento, postseguimiento, putseguimiento, deleteseguimiento } = require('../controllers/seguimientos');
const router = Router();

router.get('/', getseguimiento)
router.post('/', postseguimiento)
router.put('/:id', putseguimiento)
router.delete('/:id', deleteseguimiento)

module.exports = router