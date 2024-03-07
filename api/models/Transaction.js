// transactionModel.js

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  transactionType: String,
  startDate: Date,
  endDate: Date,
  // Additional fields for transaction details
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
