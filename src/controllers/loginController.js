const loginService = require('../services/loginService')

const login = async (req, res) => {
    try {
        const { username } = req.body
        const token = await loginService.login(username)
        res.status(200).json({ token, username })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { login }