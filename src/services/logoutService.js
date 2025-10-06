const { Session } = require('../models')

const logout = async (token) => {
    
    const sessionToDelete = await Session.findOne({
        where: {
            token
        }
    })
    if (!sessionToDelete) {
        return null
    }

    await sessionToDelete.destroy()
    return sessionToDelete
}

module.exports = { logout }