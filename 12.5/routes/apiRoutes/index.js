const express = require('express');
const router = express.Router();

router.use(require('./department'));
router.use(require('./employee'));
router.use(require('./Roles'));


module.exports = router;
