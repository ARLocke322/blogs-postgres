const { Blog, } = require('../models')
const { Op, Sequelize } = require('sequelize')
const { sequelize } = require('../util/db')

const getAuthors = async () => {

    const authors = await Blog.findAll({ 
        group: 'author',
        attributes: [
            'author',
            [sequelize.fn('COUNT', sequelize.col('title')), 'articles'],
            [sequelize.fn('SUM', sequelize.col('likes')), 'likes']
        ],
        order: [
            ['likes', 'DESC']
        ]
    })

    return authors
}



module.exports = { getAuthors }
/*
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
            attributes: {
            include: []
        } 
*/