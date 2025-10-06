const blogService = require('../services/blogService')

const getBlogs = async (req, res, next) => {
    try {
        const blogs = await blogService.getBlogs(req.query.search)
        res.json(blogs)
    } catch (error) {
        next(error)
    }
}

const addBlog = async (req, res, next) => {
    try {
        const addedBlog = await blogService.addBlog(req.user.dataValues, req.body)
        res.json(addedBlog)
    } catch (error) {
        next(error)
    }
}

const deleteBlog = async (req, res, next) => {
    try {
        const deletedBlog = await blogService.deleteBlog(req.user.dataValues, req.blog)
        res.json(deletedBlog)
    } catch (error) {
        next(error)
    }
}

const updateBlog = async (req, res, next) => {
    try {
        const updatedBlog = await blogService.updateBlog(req.blog, req.body)
        res.json(updatedBlog)
    } catch (error) {
        next(error)
    }
}

module.exports = { getBlogs, addBlog, deleteBlog, updateBlog }

// decode token
// check user exists
// add blog