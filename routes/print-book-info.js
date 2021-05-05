const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const bookData = require('./add-book');

const router = express.Router();

router.get('/', (req, res, next) => {
    const bookList = bookData.bookList;
    res.render('print-book-info', {books: bookList, pageTitle: 'Display book information'});
    
});

module.exports = router;
 