// favoritesModel.js

const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;
