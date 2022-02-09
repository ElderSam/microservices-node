const routes = require('express').Router()

// Routes definition
routes.get('/users', (req, res) => res.sendStatus(200))

module.exports = routes