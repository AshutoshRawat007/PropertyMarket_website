// BlogPost.js

const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  
  Title: String,
  Coverimage: String,
  Content: String,
  CreatedAt: Date,
  UpdatedAt:Date,
  LikeId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Likes' },
  CommentsId:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
  WriterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;
