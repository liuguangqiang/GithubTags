var express = require('express');
var router = express.Router();
var controller = require("../app/controllers/repos");

/* GET home page. */
router.get('/', controller.getAll);

router.get('/starred', controller.getStarred);

module.exports = router;
