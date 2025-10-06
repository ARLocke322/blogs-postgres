const authorRouter = require('express').Router()
const authorController = require('../controllers/authorController')

authorRouter.get('/', authorController.getAuthors)

module.exports = authorRouter