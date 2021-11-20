const express = require('express')
const app = new express()
const path = require('path')
//we specify that any request that ask for assets should get it from the ‘ public ’ directory.
app.use(express.static('public'))
const ejs = require('ejs') 
app.set('view engine','ejs')
const mongoose = require('mongoose')

//We define a connection with mongoose.connect which takes in the parameter host and database name
mongoose.connect('mongodb://localhost/express_blog', {useNewUrlParser: true})

app.get('/',(req,res)=>{
    res.render('index'); 
})


app.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'public/about.html'));
    res.render('about');
})

app.get('/contact',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'public/contact.html'));
    res.render('contact');
})

app.get('/post',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'public/post.html'));
    res.render('post')
})

app.listen(4000, ()=>{
console.log('App listening on port 4000')
})