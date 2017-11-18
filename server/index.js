const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())



let students = [
{ id : 1,name:'Weera',email :'ball@outlook.com'},
{ id : 2,name:'Thannabodee',email:'win@outlook.com'}
]

app.post('/students',(req,res) => {ื
  let student = req.body
  students.push(student)
  res.json(student)
})

app.get('/greeting',(req,res)=> {
  res.json({ message:'Hello'})
})

app.get('/students',(req,res)=>{
  res.json(students)
})



module.exports = app
