// const mongoose = require('mongoose');
// const {Schema, model} = mongoose;

// const UserSchema = new Schema({
//   Username: {type: String, select:true,required: true, min: 2, unique: true},
//   password: {type: String,  select:true,required: true},
// });

// const UserModel = model('User', UserSchema);
// module.exports = UserModel;


// userSchema.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Username: { type: String, select: true, required: true, min: 2, unique: true },
  password: { type: String, select: true, required: true, min: 2 },
  role: { type: String, enum: ['user', 'agent'], default: 'user' },
  name: String,
  phone: String,
  description: String,
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
