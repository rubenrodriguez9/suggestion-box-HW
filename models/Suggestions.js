const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
    title: {String, lowercase: true, unique: true, required:true},
    name: {String, lowercase: true, required: true},
    suggestion: {String, lowercase: true, required: true},
    likes: {Number, default: 0},
    anonymous: {Boolean},
    timeCreated: {Date, default: Date.now()},

})

module.exports = mongoose.model('suggestion', SuggestionSchema)

