var mongoose = require('mongoose');

var booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    publisher: {
        type: String
    },
    pages: {
        type: String
    },
    saludo: {
        type: String,
        default: "Holi boli :3"
    }
})

var Book = module.exports = mongoose.model('Book', booksSchema);

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit)
}

module.exports.getBookById = function(id, callback){
    Book.findById(id, callback)
}

