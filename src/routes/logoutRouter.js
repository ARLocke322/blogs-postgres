const logoutRouter = require('express').Router()
const logoutController = require('../controllers/logoutController');
const tokenExtractor = require('../middleware/tokenExtractor');
const userExtractor = require('../middleware/userExtractor');

logoutRouter.delete('/', tokenExtractor, userExtractor, logoutController.logout)

module.exports = logoutRouter
