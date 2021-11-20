const express = require('express')
const app = new express()
const path = require('path')
//routing module with body parser
const router = require('./routes/router')
const ejs = require('ejs') 
//we specify that any request that ask for assets should get it from the ‘ public ’ directory.
app.use(express.static('public'))
app.use('/',router)
//routing modules
//templating engine EJS
app.set('view engine','ejs')
//mongo db module
const mongoose = require('mongoose')

//We define a connection with mongoose.connect which takes in the parameter host and database name
mongoose.connect('mongodb://localhost/express_blog', {useNewUrlParser: true})


app.listen(4000, ()=>{
console.log('App listening on port 4000')
})