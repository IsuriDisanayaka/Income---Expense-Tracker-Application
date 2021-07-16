const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')


// router.get('/', async(req,res) => {
//     try{
//            const users = await User.find()
//            res.json(users)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

// router.get('/:id', async(req,res) => {
//     try{
//            const user = await User.findById(req.params.id)
//            res.json(user)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// })

router.get('/', async(req, res) =>{
    try{
        const users = await User.find({email : req.query.name})
        console.log(users[0]);
        console.log(users[0]._id);
        if(users[0].name == req.query.name){
            if(users[0].password == req.query.password){
                res.json(users[0])
            }else{
                res.json(false)
            }
        }else{
            res.json("name not found" + err)
        }
       
    }catch(err){
        res.send("Error : "+err)
    }
})

router.post('/', async(req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const a1 =  await user.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        user.sub = req.body.sub
        const a1 = await user.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router
