
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())




const PORT = 3005
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})