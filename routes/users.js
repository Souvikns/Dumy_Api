const router = require('express').Router()
const path = require('path')
const fs = require('fs')
const p = path.join(__dirname,'..','data','users.json')

router.get('/',(req,res)=>{
    const data = fs.readFileSync(p)
    return res.status(200).json(JSON.parse(data))
})

router.get('/:id',(req,res)=>{
    const id = req.params
    let data = fs.readFileSync(p)
    data = JSON.parse(data)
    data.forEach(d=>{
        if(d.id == id.id){
            return res.status(200).json(d)
        }
    })

    return res.status(404).json({error: "Data not found"})
})


module.exports = router