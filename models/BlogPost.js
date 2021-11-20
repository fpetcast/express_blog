//models which are objects that represent collections in our mongo database
const mongoose = require('mongoose') 
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({ 
    title: String,
    body: String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;