//models
const BlogPost = require('../models/BlogPost.js')

//searchbar
exports.search_posts = async (req,res)=>{
    const searchResult = await BlogPost.find({title:req.body.search})
    res.setHeader('Content-Type', 'application/json');
    res.json(searchResult)
};