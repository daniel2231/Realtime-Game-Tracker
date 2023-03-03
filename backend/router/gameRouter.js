// create router
const express = require('express');
const gameRouter = express.Router();
const Game = require('../models/game');
const Host = require('../models/host');
const Guest = require('../models/guest');

gameRouter.get('/', (req, res) => {
	res.send('game router');
});

// create game
gameRouter.post('/init', (req, res) => {
	let code = Math.floor(Math.random() * 10000 + 1);
	console.log(code);
	let game = new Game({
		gameCode: code,
		gameStatus: false,
		host: new Host({
			teamNumber: 1,
			teamScore: 0,
		}),
	});
	game
		.save()
		.then((game) => {
			console.log('Game Saved: ', game);
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(game);
		})
		.catch((err) => {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'application/json');
			res.json({ error: err });
		});
});

//join game for guest
gameRouter.post('/join', (req, res) => {
	Game.findOneAndUpdate({ gameCode: req.body.gameCode })
		.then((game) => {
			if (game) {
				game.guest = new Guest({
					teamNumber: 1,
					teamScore: 0,
                });
                game.connectionStatus = true;
				game
					.save()
					.then((game) => {
						console.log('Game Saved: ', game);
						res.statusCode = 200;
						res.setHeader('Content-Type', 'application/json');
                        res.json(game);
                        req.io.emit('gameReady', true);
					})
					.catch((err) => {
						res.statusCode = 500;
						res.setHeader('Content-Type', 'application/json');
						res.json({ error: err });
					});
			} else {
				res.statusCode = 404;
				res.setHeader('Content-Type', 'application/json');
				res.json({ error: 'Game not found' });
			}
		})
		.catch((err) => {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'application/json');
			res.json({ error: err });
		});
});

// get game
gameRouter.get('/:gameCode', (req, res) => {
	Game.findOne({ gameCode: req.params.gameCode })
		.then((game) => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(game);
		})
		.catch((err) => {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'application/json');
			res.json({ error: err });
		});
});

// update game status for host
gameRouter.put('/:gameCode', (req, res) => {
	Game.findOneAndUpdate(
		{ gameCode: req.params.gameCode },
		{ $set: { gameStatus: req.body.gameStatus } },
		{ new: true }
	)
		.then((game) => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(game);
		})
		.catch((err) => {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'application/json');
			res.json({ error: err });
		});
});

module.exports = gameRouter;
