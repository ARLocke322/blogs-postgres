const express = require('express')
const app = express()

const { PORT } = require('./src/util/config')
const { connectToDatabase } = require('./src/util/db')

const blogRouter = require('./src/routes/blogRouter')
const userRouter = require('./src/routes/userRouter')
const loginRouter = require('./src/routes/loginRouter')
const authorRouter = require('./src/routes/authorRouter')
const readingListRouter = require('./src/routes/readingListRouter')
const logoutRouter = require('./src/routes/logoutRouter')

const errorHandler = require('./src/middleware/errorHandler')

app.use(express.json())

app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/authors', authorRouter)
app.use('/api/readinglists', readingListRouter)
app.use('/api/logout', logoutRouter)

app.use(errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()