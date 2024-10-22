var express = require('express');
var router = express.Router();

/* Import Controller */
const mainController = require('../controller/mainController');

/* GET home page. */
router.get('/', mainController.index);
module.exports = router;
