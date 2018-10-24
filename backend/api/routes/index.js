'use strict';

let express = require('express'),
	router = express.Router(),
	competentieController = require('../controllers/competenceController');


router.route('/competences')
	.post(competentieController.create)
	.get(competentieController.findAll);


module.exports = router;