// Likes.js

const mongoose = require('mongoose');

const LikesSchema = new mongoose.Schema({
  PostId:{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
  LikeduserId:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Likes = mongoose.model('Likes', LikesSchema);

module.exports = Likes;
