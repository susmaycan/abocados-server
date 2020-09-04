const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: String,
    ranking: Number,
    picture: String,
    duration: Number,
    directions: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)
