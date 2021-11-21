const BlogPost = require('../models/BlogPost.js')

exports.index = async (req,res)=>{
    const blogposts = await BlogPost.find({})
    res.render('index',{ 
        blogposts: blogposts
    });
};

exports.create_post = (req, res) => {
    //provide req.body as first argument and a callback function as the 2nd argument which is called when create completes
    BlogPost.create(req.body,(error,blogpost) =>{
        res.redirect('/') 
    })
};

exports.searchBlogPosts = async (req,res)=>{
    const searchResult = await BlogPost.find({title:req.body.search})
    console.log(searchResult)
    res.render('index',{ 
        blogposts: searchResult
    });
};