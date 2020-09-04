const Recipe = require('../model/recipe.js')

module.exports = {

    create: (req, res) => {

        const recipe = new Recipe(req.body)

        recipe.save()
            .then(response =>
                res.send(response)
            ).catch(err => {
            res.status(500).send({
                message: err.message || "Error creating the recipe"
            })
        })
    },

    findAll: (req, res) => {
        Recipe.find({}, {"name": 1, "picture": 1, "ranking": 1})
            .then(recipeList => {
                res.send(recipeList)
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the list of recipes."
            })
        })
    },

    findOne: (req, res) => {
        Recipe.findById(req.params.id)
            .then(recipe => {
                if (!recipe) {
                    return res.status(404).send({
                        message: "Recipe not found with id " + req.params.id
                    })
                }
                res.send(recipe)
            }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.id
                })
            }
            return res.status(500).send({
                message: "Error retrieving recipe with id " + req.params.id
            })
        })
    },

    update: (req, res) => {
        Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(recipe => {
                if (!recipe) {
                    return res.status(404).send({
                        message: "Recipe not found with id " + req.params.id
                    })
                }
                res.send(recipe)
            }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.id
                })
            }
            return res.status(500).send({
                message: "Error updating recipe with id " + req.params.id
            })
        })
    },

    delete: (req, res) => {
        let id = req.params.id

        Recipe.findByIdAndDelete(id)
            .then(recipe => {
                if (!recipe) {
                    return res.status(404).send({
                        message: "Recipe not found with id " + id
                    })
                }
                res.send({message: "Recipe deleted successfully!"})

            }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Recipe not found with id " + id
                })
            }

            return res.status(500).send({
                message: "Could not delete recipe with id " + id
            })
        })
    },

}
