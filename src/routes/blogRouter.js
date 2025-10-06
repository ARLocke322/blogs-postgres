const blogRouter = require('express').Router()
const blogController = require('../controllers/blogController')
const blogFinder = require('../middleware/blogFinder')
const userExtractor = require('../middleware/userExtractor')
const tokenExtractor = require('../middleware/tokenExtractor')

blogRouter.get('/', blogController.getBlogs)
blogRouter.post('/', tokenExtractor, userExtractor, blogController.addBlog)
blogRouter.delete('/:id', tokenExtractor, userExtractor, blogFinder, blogController.deleteBlog)
blogRouter.put('/:id', blogFinder, blogController.updateBlog)

module.exports = blogRouter