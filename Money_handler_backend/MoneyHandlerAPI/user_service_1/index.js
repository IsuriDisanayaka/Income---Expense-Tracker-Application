const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/MoneyHandler'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/UserRoute')
app.use('/UserRoute',userRouter)

const incomeRouter = require('./routes/IncomeRoute')
app.use('/IncomeRoute',incomeRouter)

const expenseRouter = require('./routes/ExpenseRoute')
app.use('/ExpenseRoute',expenseRouter)

app.listen(3000 ,()=>{
    console.log(`app listening `)
})