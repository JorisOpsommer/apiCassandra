'use strict';

let express = require('express'),
	router = express.Router(),
	competentieController = require('../controllers/competentieController');


router.route('/competenties')
	.post(competentieController.create)
	.get(competentieController.findAll);


module.exports = router;