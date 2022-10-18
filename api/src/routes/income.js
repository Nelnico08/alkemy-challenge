const { Router } = require('express');
const { getIncome, postIncome } = require('../controllers/income.controller');

const router = Router();

router.get('/:monthID', getIncome)
router.post('/', postIncome);

module.exports = router;