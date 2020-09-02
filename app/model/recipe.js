const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    ranking: Number,
    duration: Number,
    directions: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)
