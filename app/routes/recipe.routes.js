module.exports = (app) => {

  const recipes = require('../controllers/recipe.controller')

  app.post('/recipe', recipes.create)

  app.get('/recipe', recipes.findAll)

  app.get('/recipe/:id', recipes.findOne)

  app.put('/recipe/:id', recipes.update)

  app.delete('/recipe/:id', recipes.delete)
}
