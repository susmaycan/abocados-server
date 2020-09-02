const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: String,
    ingredients: [String],
    ranking: Number,
    duration: Number,
    difficult: Number,
    directions: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)
