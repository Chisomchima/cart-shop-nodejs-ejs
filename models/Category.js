var mongoose = require('mongoose');

// Category Schema
var CategorySchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    param: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
    
});

var Category = module.exports = mongoose.model('Category', CategorySchema);