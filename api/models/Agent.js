// agentModel.js

const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
  description: String,
  agentImage: String,
  propertiesOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
  currentcustomers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
