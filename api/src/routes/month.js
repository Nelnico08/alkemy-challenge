const { Router } = require('express');
const { postMonth, getMonth} = require('../controllers/month.controller');

const router = Router();

router.get('/', getMonth);
router.get('/:monthID', getMonth)
router.post('/', postMonth);

module.exports = router;