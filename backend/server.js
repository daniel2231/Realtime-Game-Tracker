//express server
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, MONGO_URI } = process.env;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

mongoose
	.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

io.on('connection', (socket) => {
	console.log('A user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

// Make io accessible to our router
app.use(function (req, res, next) {
	req.io = io;
	next();
});

const gameRouter = require('./router/gameRouter');
app.use('/game', gameRouter);

server.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
