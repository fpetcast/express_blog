const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser') 
// body-parser parse incoming request bodies in a middleware and make the form data available under the req.body property
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

//GET

router.get('/',(req,res)=>{
    res.render('index'); 
})

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

router.post('/posts/store',(req,res)=>{ 
    console.log(req.body)
    res.redirect('/')
    console.log(res.status);
    if (res.status(200)) {
        console.log('todo bien');
    }
})

module.exports = router;