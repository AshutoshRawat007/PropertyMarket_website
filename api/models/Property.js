// propertyModel.js

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    // id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  name: String,
  location: String,
  amenities: [String],
  images: [String],
  roomDetails: {
    numberOfRooms: Number,
    kitchen: Boolean,
    guestRoom: Boolean,
    hotwater: Boolean,
    parking:Boolean,
    wifi:Boolean,
    privatebathroom:Boolean,
    couplefriendly:Boolean,
    familyfrinedly:Boolean,

  },
  roomnumber:Number,
  bathroomnumber:Number,
  description: String,
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
