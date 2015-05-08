module.exports = {

	create: function(req, res) {
		console.log(req.body);
		var newSighting = new Sighting(req.body);
		newSighting.save(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	read: function(req, res) {
		Sighting.find(req.query).exec(function(err, result){
			if(err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	update: function(req, res) {
		res.send('update method test');
	},
	delete: function(req, res) {
		res.send('delete method test');
	},
}

