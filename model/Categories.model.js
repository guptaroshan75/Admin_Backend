const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: String
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('categories', CategorySchema);