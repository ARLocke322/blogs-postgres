const readingListRouter = require('express').Router()
const readingListController = require('../controllers/readingListController')
const userExtractor = require('../middleware/userExtractor')
const tokenExtractor = require('../middleware/tokenExtractor')

readingListRouter.get('/', readingListController.getReadingLists)
readingListRouter.post('/', readingListController.addToReadingList)
readingListRouter.put('/:id', tokenExtractor, userExtractor, readingListController.updateReadingList)


module.exports = readingListRouter