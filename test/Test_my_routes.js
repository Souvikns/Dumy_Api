const Axios = require('axios')
const fs = require('fs')


const posts_route = 'http://localhost:3000/posts/1'
const comments_route = 'http://localhost:3000/comments'
const albums_route = 'http://localhost:3000/albums'
const photos_route = 'http://localhost:3000/photos'
const todos_route = 'http://localhost:3000/todos'
const users_route = 'http://localhost:3000/users'


Axios({
    method: 'GET',
    url: posts_route
}).then(data=>{
    if(data.status == 200){
        console.log('ok')
    }
}).catch(err=>{
    console.log(err)
})

Axios({
    method: 'GET',
    url: comments_route
}).then(data=>{
    if(data.status == 200){
        console.log('ok')
    }
}).catch(err=>{
    console.log(err)
})

Axios({
    method: 'GET',
    url: albums_route
}).then(data=>{
    if(data.status == 200){
        console.log('ok')
    }
}).catch(err=>{
    console.log(err)
})

Axios({
    method: 'GET',
    url: photos_route
}).then(data=>{
    if(data.status == 200){
        console.log('ok')
    }
}).catch(err=>{
    console.log(err)
})

Axios({
    method: 'GET',
    url: todos_route
}).then(data=>{
    if(data.status == 200){
        console.log('ok')
    }
}).catch(err=>{
    console.log(err)
})


Axios({
    method: 'GET',
    url: users_route
}).then(data=>{
    if(data.status == 200){
        console.log('ok')
    }
}).catch(err=>{
    console.log(err)
})