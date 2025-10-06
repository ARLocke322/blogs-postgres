const readingListService = require('../services/readingListService')

const getReadingLists = async (req, res) => {
    const readingLists = await readingListService.getReadingLists()
    res.json(readingLists)
}

const addToReadingList = async (req, res) => {
    const addedItem = await readingListService.addToReadingList(req.body)
    res.json(addedItem)
}

const updateReadingList = async (req, res) => {
    const blogId = req.params.id
    const userId = req.user.id

    const updatedReadingList = await readingListService.updateReadingList(userId, blogId, req.body)
    res.json(updatedReadingList)

}


module.exports = { getReadingLists, addToReadingList, updateReadingList }