const { Blog, User } = require('../models')
const { Op, Sequelize } = require('sequelize')

const getBlogs = async (searchQuery) => {

    const blogs = await Blog.findAll({
        include: {
            model: User
        },
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.substring]: searchQuery ? searchQuery : ''
                    }
                },
                {
                    author: {
                        [Op.substring]: searchQuery ? searchQuery : ''
                    }
                }
            ]
            //  title: {[Op.substring]: searchQuery ? searchQuery : ''}
        },
        order: [
            ['likes', 'DESC']
        ]
    })
    return blogs
}

const addBlog = async (user, blogObject) => {
    console.log(blogObject)
    const addedBlog = await Blog.create({ userId: user.id, ...blogObject })
    return addedBlog
}

const deleteBlog = async (user, blogToDelete) => {
    if (!blogToDelete) {
        return null
    }
    if (user.id !== blogToDelete.userId) {
        throw new Error('Can only delete own blog')
    }
    await blogToDelete.destroy()
    return blogToDelete

}

const updateBlog = async (blogToUpdate, updates) => {
    if (!blogToUpdate) {
        throw new Error('Blog not found')
    }
    await blogToUpdate.update(updates)
    return blogToUpdate

}

module.exports = { getBlogs, addBlog, deleteBlog, updateBlog }