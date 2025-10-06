const { Op } = require('sequelize')
const { User, Blog, ReadingList } = require('../models')

const getUsers = async () => {
    const users = await User.findAll({
        include: {
            model: Blog
        }
    })
    return users
}

const getUser = async (id, readQuery) => {
    let read = {
        [Op.in]: [true, false]
    }
    if (readQuery) {
        read = readQuery === "true"
    }
    console.log(read)

    const userFound = await User.findByPk(id, {
        include: {
            model: Blog,
            as: 'readings',
            attributes: { exclude: ['userId'] },
            through: {
                attributes: ['id', 'read'],
                where: {
                    read
                }
            },

        }
    })

    if (!userFound) {
        throw new Error('User not found')
    }
    return userFound

}

const addUser = async (userObject) => {
    const addedUser = await User.create(userObject)
    return addedUser
}


const updateUsername = async (username, newUsername) => {
    const user = await User.findOne({ where: { username } })

    if (!user) {
        throw new Error('User not found')
    }

    await user.update({ username: newUsername })
    return user
}


module.exports = { getUsers, getUser, addUser, updateUsername }