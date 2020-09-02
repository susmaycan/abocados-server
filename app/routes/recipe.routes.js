module.exports = (app) => {

  const recipeController = require('../controllers/recipe.controller')

  app.get('/recipes', recipeController.findAll)
}
