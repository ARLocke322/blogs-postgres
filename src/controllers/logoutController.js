const logoutService = require('../services/logoutService')

const logout = async (req, res) => {
    await logoutService.logout(req.token)
}

module.exports = { logout }