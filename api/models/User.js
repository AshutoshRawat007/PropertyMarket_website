const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  Fname: {type: String, required: true, min: 2, unique: true},
  password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;