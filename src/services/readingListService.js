
const { Op } = require('sequelize')
const { ReadingList } = require('../models')

const getReadingLists = async () => {
    const readingLists = await ReadingList.findAll({})
    return readingLists
}

const addToReadingList = async (newItemObject) => {
    console.log(newItemObject)
    const addedItem = await ReadingList.create(newItemObject)
    return addedItem
}

const updateReadingList = async (userId, blogId, updates) => {
    itemToUpdate = (await ReadingList.findAll({
        where: {
            userId: { [Op.eq]: userId },
            blogId: { [Op.eq]: blogId },
        }
    }))[0]
    console.log(itemToUpdate)
    itemToUpdate.update(updates)
    return itemToUpdate
}


module.exports = { getReadingLists, addToReadingList, updateReadingList }