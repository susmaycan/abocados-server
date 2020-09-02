const express = require('express')
const bodyParser = require('body-parser')
let cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

require('./app/routes/recipe.routes.js')(app)

const PORT = process.env.PORT || 3001

// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port 3001")
})
