const userRouter = require('express').Router()
const userController = require('../controllers/userController')

userRouter.get('/', userController.getUsers)
userRouter.get('/:id', userController.getUser)
userRouter.post('/', userController.addUser)
userRouter.put('/:username', userController.updateUsername)


module.exports = userRouter