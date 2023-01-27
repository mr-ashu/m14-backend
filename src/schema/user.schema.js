
const mongoose = require('mongoose')

const gamePost = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lavel: {
        type: String,
        required: true,
    },
    score: {
        type: Number,

        default: 0
    },

}, {
    versionKey: false,
    timestamps: true
})

const GameModals = mongoose.model('game', gamePost)

module.exports = GameModals 