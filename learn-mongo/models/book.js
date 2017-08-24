var mongoose = require('mongoose');

var booksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
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

