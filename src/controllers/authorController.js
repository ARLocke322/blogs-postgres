const authorService = require('../services/authorService')

const getAuthors = async (req, res) => {
    const authors = await authorService.getAuthors()
    res.json(authors)
}

module.exports = { getAuthors }