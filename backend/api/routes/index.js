'use strict';

let express = require('express'),
	router = express.Router(),
	competentieController = require('../controllers/competenceController');


//COMPETENCES
router.route('/competences')
	.get(competenceController.findAll)
	.post(competenceController.create)
	
router.route('/competences/:id')
	.get(competenceController.getById)
	.put(competenceController.updateById)
	.delete(competenceController.deleteById);

router.route('/competences/name/:name')
	.get(competenceController.getByName)


module.exports = router;