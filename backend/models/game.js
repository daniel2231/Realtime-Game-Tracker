//Game Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
	gameCode: {
		type: String,
		required: true,
		unique: true,
	},
	host: {
		type: Schema.Types.ObjectId,
		ref: 'Host',
	},
	guest: {
		type: Schema.Types.ObjectId,
		ref: 'Guest',
	},
	gameStatus: {
		type: Boolean,
		required: true,
	},
	connectionStatus: {
		type: Boolean,
		required: true,
		default: false,
	},
});

module.exports = mongoose.model('Game', gameSchema);
