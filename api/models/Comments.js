// Comments.js

const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
  Content: String,
  CreatedAt: Date,
  PostId:{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
  CommentuserId:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Comments = mongoose.model('Comments', CommentsSchema);

module.exports = Comments;
