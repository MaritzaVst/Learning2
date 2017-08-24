const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

Genres = require('./models/genre.js');
Books = require('./models/book.js');

mongoose.connect('mongodb://localhost/bookstore', {
    useMongoClient: true
})
const db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Oh my :o');
})

app.get('/api/genres', function(req, res){
    Genres.getGenres(function(err, genres){
        if(err) {
            throw err;
        }
        res.json(genres)
    })
});

app.get('/books', function(req, res){
    Books.getBooks(function(err, books){
        if(err) {
            throw err;
        }
        res.json(books)
    })
})

app.listen(3000)

console.log('Running')