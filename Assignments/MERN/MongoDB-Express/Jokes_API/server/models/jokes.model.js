const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"]
    },
    createdAt: {
        type: Date, default: Date.now()
    },
    updatedAt: {
        type: Date, default: Date.now()
    }
},
{timestamps: true}
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;