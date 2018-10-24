'use strict'

let database = require('../config/database');

module.exports.findAll = function(req, res){
	const query = 'SELECT * FROM competences';

	database.executeReader(query, function(result){
		if(result.success)
		{
			res.json(result.data);
		}
		else
		{
			res.send(result.err);
		}
	});	
};

module.exports.getById = function(req, res){
	const query = 'SELECT * FROM competences WHERE id = ? ALLOW FILTERING';
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

module.exports.getByname = function(req, res){
	const query = 'SELECT * FROM competences WHERE name = ? ALLOW FILTERING';
	let params = [req.params.name];

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
	const query = 'INSERT INTO competences (id, name, description) VALUES (now(),?,?)';
	let params = [req.params.name, req.params.description];
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
	const query = 'UPDATE competences SET name = ?, description = ? WHERE id = ?';
	let params = [req.params.name, req.params.description, req.params.competentie_id];

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
	const query = 'DELETE FROM competences WHERE id = ?';
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