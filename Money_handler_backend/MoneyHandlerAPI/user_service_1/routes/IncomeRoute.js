const express = require('express')
const router = express.Router()
const Income = require('../models/IncomeSchema')


router.get('/', async(req,res) => {
    try{
           const incomes = await Income.find()
           res.json(incomes)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const income = await Icome.findById(req.params.id)
           res.json(income)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const income = new Income({
        date: req.body.date,
        category: req.body. category,
        amount: req.body.amount,
        note:req.body.note
    })

    try{
        const a1 =  await income.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const income = await Income.findById(req.params.id) 
        income.sub = req.body.sub
        const a1 = await income.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router
