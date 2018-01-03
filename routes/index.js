var express = require('express');
var router = express.Router();
var controller = require("../app/controllers/index");

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
