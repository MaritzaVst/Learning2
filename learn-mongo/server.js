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

/*
[{"_id":"599f41f2102ad5bdf679c84c","title":"Harry Potter","genre":"fantasy","description":"This volume draws together a range of Chomsky's writings arguing that the goal of education is to produce free human beings whose values are not accumulation and domination, but rather free association on terms of equality.","author":"J. Rowling","image_url":"https://covers.openlibrary.org/b/id/240726-L.jpg","publisher":"Norma","saludo":"Holi boli :3"},{"_id":"599f43a9102ad5bdf679c84e","title":"El Señor de los elfos","genre":"comedy","description":"This volume draws together a range of Chomsky's writings arguing that the goal of education is to produce free human beings whose values are not accumulation and domination, but rather free association on terms of equality.","author":"Tolkin","image_url":"https://covers.openlibrary.org/b/id/240726-L.jpg","publisher":"Nature Republic","saludo":"Holi boli :3"}]
*/