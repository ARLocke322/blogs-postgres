
const errorHandler = (error, request, response, next) => {


    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    } else if (error.name === 'SequelizeValidationError') {
        return response.status(400).json({ error: 'invalid request body' })
    } else if (error.name === 'SequelizeDatabaseError') {
        return response.status(400).json({ error: 'malformatted request body' })
    }
    next(error)
}

module.exports = errorHandler