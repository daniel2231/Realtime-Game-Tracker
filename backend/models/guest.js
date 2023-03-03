//User Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Game",
    },
    teamNumber: {
        type: Number,
    },
    teamScore: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("Guest", guestSchema);
    