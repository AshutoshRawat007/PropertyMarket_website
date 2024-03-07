// propertyModel.js

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    // id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  name: String,
  location: String,
  amenities: [String],
  images: [String], // Assuming image URLs, you might store them differently based on your needs https://drive.google.com/file/d/1caYqVqBTtvoLuOY35uRBLnj_PazBrxx8/view?usp=sharing
  roomDetails: {
    numberOfRooms: Number,
    kitchen: Boolean,
    guestRoom: Boolean,
    hotwater: Boolean,
    // Add more fields as needed
  },
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
