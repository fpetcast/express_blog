//MODELS 
const blogpost_controller = require('../controllers/blogPostController');

//modules
const express = require('express');
const router = express.Router();
const path = require('path')
const bodyParser = require('body-parser')  
// body-parser parse incoming request bodies in a middleware and make the form data available under the req.body property
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

//GET

router.get('/', blogpost_controller.index)

router.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'public/about.html'));
    res.render('about');
})

router.get('/contact',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'public/contact.html'));
    res.render('contact');
})

router.get('/post',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'public/post.html'));
    res.render('post')
})

router.get('/posts/new',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'public/post.html'));
    res.render('create')
})

//POST 

router.post('/posts/store', blogpost_controller.create_post)

module.exports = router;