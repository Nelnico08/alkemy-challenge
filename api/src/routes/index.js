const { Router } = require('express');
const month = require('./month')
const income = require('./income');
const expense = require('./expense')

const router = Router();

router.use('/month', month);
router.use('/income', income)
router.use('/expense', expense)

module.exports = router;