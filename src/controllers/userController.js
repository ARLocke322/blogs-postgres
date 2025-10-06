const userService = require('../services/userService')

const getUsers = async (req, res) => {
    const users = await userService.getUsers()
    res.json(users)
}

const getUser = async (req, res) => {
    const user = await userService.getUser(req.params.id, req.query.read)
    if (user) {
        res.json(user)
    } else {
        res.status(404).end()
    }
}

const addUser = async (req, res) => {
    try {
        const user = await userService.addUser(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updateUsername = async (req, res) => {
  try {
    const { username } = req.params
    const { username: newUsername } = req.body
    
    const updatedUser = await userService.updateUsername(username, newUsername)
    res.json(updatedUser)
  } catch (error) {
    if (error.message === 'User not found') {
      return res.status(404).json({ error: error.message })
    }
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getUsers, getUser, addUser, updateUsername }