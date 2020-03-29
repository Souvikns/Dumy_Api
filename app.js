//importing modules 
const express = require('express')
const cors = require('cors')
const path = require('path')


//constants
const PORT = process.env.PORT || 3000


//middlewares 
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.raw())

app.use(express.static(path.join(__dirname,'public')))

/**
 *  Connecting Routes
 */

// posts
const postRoute = require('./routes/posts')
app.use('/posts',postRoute)

//comments 
const commentRoute = require('./routes/comments')
app.use('/comments',commentRoute)

//photos
const photosRoute = require('./routes/photos')
app.use('/photos',photosRoute)

//albums
const albumsRoute = require('./routes/albums')
app.use('/albums',albumsRoute)

//todo
const todoRoute = require('./routes/todo')
app.use('/todos',todoRoute)

//users
const usersRoute = require('./routes/users')
app.use('/users',usersRoute)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))
})

//port
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})