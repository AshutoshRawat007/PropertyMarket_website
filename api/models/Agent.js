// agentModel.js

const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  description: String,
  agentImage: String,
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }],
  customers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
