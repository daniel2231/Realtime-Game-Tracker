//User Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hostSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Host",
    },
    teamNumber: {
        type: Number,
    },
    teamScore: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("Host", hostSchema);
    