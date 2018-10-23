'use strict'

let database = require('../config/database');

module.exports.findAll = function(req, res){
	const query = 'SELECT * FROM competenties ALLOW FILTERING';

	database.executeReader(query, function(result){
		if(result.success)
		{
			res.json(result.data);
		}
		else
		{
			res.send(result.err);
		}
	}, params);	
};

module.exports.getById = function(req, res){
	const query = 'SELECT * FROM competenties WHERE id = ? ALLOW FILTERING';
	let params = [req.params.competentie_id];

	database.executeReader(query, function(result){
		if(result.success)
		{
			res.json(result.data);
		}
		else
		{
			res.send(result.err);
		}
	}, params);	
};

module.exports.getByNaam = function(req, res){
	const query = 'SELECT * FROM competenties WHERE naam = ? ALLOW FILTERING';
	let params = [req.params.naam];

	database.executeReader(query, function(result){
		if(result.success)
		{
			res.json(result.data);
		}
		else
		{
			res.send(result.err);
		}
	}, params);	
};

module.exports.create = function(req, res){
	const query = 'INSERT INTO competenties (id, naam, beschrijving) VALUES (now(),?,?)';
	let params = [req.params.naam, req.params.beschrijving];
	database.executeNonReader(query, function(result){
		if(result.success)
		{
			res.json("Created");
		}
		else
		{
			res.send(result.err);
		}
	}, params);
};

module.exports.updateById = function(req, res){
	const query = 'UPDATE competenties SET naam = ?, beschrijving = ? WHERE id = ?';
	let params = [req.params.naam, req.params.beschrijving, req.params.competentie_id];

	database.executeNonReader(query, function(result){
		if(result.success)
		{
			res.json("Updated");
		}
		else
		{
			res.send(result.err);
		}
	}, params);
};

module.exports.deleteById = function(req, res){
	const query = 'DELETE FROM competenties WHERE id = ?';
	let params = [req.params.competentie_id];
	
	database.executeNonReader(query, function(result){
		if(result.success)
		{
			res.json("Deleted");
		}
		else
		{
			res.send(result.err);
		}
	}, params);
};