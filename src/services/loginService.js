const { User, Session } = require('../models')

const jwt = require('jsonwebtoken')
const { SECRET } = require('../util/config')

const login = async (username) => {
    const user = await User.findOne({ where: { username } })
    if (!user) {
        throw new Error('Invalid username or password')
    }
    if (user.disabled) {
        throw new Error('Account disabled')
    }
    const userForToken = {username, id: user.id}
    const token = jwt.sign(userForToken, SECRET)

    await Session.create({ userId: user.id, token })
    return token
}

module.exports = { login }