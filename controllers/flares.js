const SubFlame = require('../models/subflame');
const Flare = require('../models/flare');
const Pyro = require('../models/pyro');

module.exports = (app) => {
	// INDEX all flares
	app.get('/flares', (req, res) => {
		Flare.find({})
			.populate('author')
			.then(flares => {
				res.render('flares-index', { flares });
			})
			.catch(err => {
				console.log(err.message);
			});
	});

	// NEW flares form
	app.get('/flares/new', (req, res) => {
		SubFlame.find({})
			.then(subflames => {
				res.render('flares-new', { subflames });
			});
	});

	// CREATE flares
	app.post('/flares/new', (req, res) => {
		// INSTANTIATE INSTANCE OF FLARE MODEL
		const flare = new Flare(req.body);
		flare.author = req.pyro._id;
		// SAVE INSTANCE OF EMBER MODEL TO DB
		flare
			.save()
			.then((flare) => {
				return Pyro.findById(flare.author);
			})
			.then((pyro) => {
				pyro.flares.unshift(flare);
				pyro.save();
				// REDIRECT TO THE NEW POST
				res.redirect('/flares/' + flare._id);
			})
			.catch((err) => {
				console.log(err.message);
			});
	});

	// SHOW single flare
	app.get('/flares/:id', function (req, res) {
		// LOOK UP THE POST
		Flare.findById(req.params.id)
			.populate('author')
			// .populate('embers')
			.then((flare) => {
				res.render('flares-show.hbs', { flare })
			}).catch((err) => {
				console.log(err.message)
			})
	});

	// EDIT flare form
	// TODO
	app.get('/flares/:id', (req, res) => {
		res.render('flares-edit')
	})

	// UPDATE flare
	// TODO
	app.get('/flares/:id', (req, res) => {
	})

	// UPDATE flare via downvote
	app.put('/flares/:id/jeers', function (req, res) {
		console.log('SUCCESS')
		Flare
			.findById(req.params.id)
			.exec(function (err, flare) {
				flare.voters.push(req.pyro._id);
				flare.rating -= 1;
				flare.save();
			})
			.then(() => {
				// its not getting here :(
				console.log("GOT HERE")
				res.redirect('/')
			})
			.catch((error) => {
				// console.log(error)
			});
	});

	// DELETE flare
	// TODO
	app.get('/flares/:id', (req, res) => {
	})
};