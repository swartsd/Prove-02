const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const bookList = [];

router.get('/add-book', (req, res, next) => {
    res.render('add-book', {pageTitle: 'Add Book'});
});

router.post('/add-book', (req, res, next) => {
    bookList.push({title: req.body.title, summary: req.body.summary});
    res.redirect('/');
});

exports.routes = router;
exports.bookList = bookList;