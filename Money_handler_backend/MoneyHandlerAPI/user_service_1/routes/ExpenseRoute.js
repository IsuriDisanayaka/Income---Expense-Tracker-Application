const express = require('express')
const router = express.Router()
const Expense = require('../models/ExpenseSchema')


router.get('/', async(req,res) => {
    try{
           const expenses = await Expense.find()
           res.json(expenses)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const expense = await Expense.findById(req.params.id)
           res.json(expense)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const expense = new Expense({
        date: req.body.date,
        category: req.body. category,
        amount: req.body.amount,
        note:req.body.note
    })

    try{
        const a1 =  await expense.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const expense = await Expense.findById(req.params.id) 
        expense.sub = req.body.sub
        const a1 = await expense.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router
