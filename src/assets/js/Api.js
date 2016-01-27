var express = require('express');
var router = express.Router();
var BaseModel = require('./BaseModel');
var database = require('../../../database.js')

// function PostsModel(){ ... }
// PostsModel.prototype = new BaseModel();
// PostsModel.prototype.getTable = function(){}
var PostsModel = new BaseModel();
PostsModel.getTable = function() {
    return database.posts;
}

// GET comments on each post => /api/posts/123/comments

// GET post by ID
router.get('/posts/:id', function(req, res, next) {
    PostsModel.findById(req.params.id, function(errorMsg, post){
        if (errorMsg) {
            var err = new Error(errorMsg);
            err.status = 404;
            return next(err);
        }
        res.json(post);
    });
});


// GET all posts
router.get('/posts', function(req, res) {
    res.json( PostsModel.all() );
});


// PUT post by ID
router.put('/posts/:id', function(req, res, next) {
    // Build our updated db object. *Form values rely on the "name" attributes
    var newEntry = {
        title: req.body.title ? req.body.title.split(' ').join('-').toLowerCase() : undefined, 
        body: req.body.body,
    }

    PostsModel.update(req.params.id, newEntry, function(errorMsg, post){
        if (errorMsg) {
            var err = new Error(errorMsg);
            err.status = 404;
            return next(err);
        }
        res.json(post);
    });
});


// POST a new entry
router.post('/posts', function(req, res, next) {
    if (!req.body.title || !req.body.body){
          var err = new Error( ( !req.body.title ? "Title" : "Body" ) + " is required");
          err.status = 400;
          return next(err);
    }

    // Build our new db object. *Form values rely on the "name" attributes
    var newEntry = {
        title: req.body.title.split(' ').join('-').toLowerCase(), 
        body: req.body.body,
    }

    // Submit to the DB
    PostsModel.create( newEntry, function(errorMsg, post){
        if (errorMsg) {
            var err = new Error(errorMsg);
            err.status = 400;
            return next(err);
        }
        res.json(post);
    } );
});


// DELETE post by ID
router.delete('/posts/:id', function(req, res, next) {
    PostsModel.del(req.params.id, function(errorMsg){
        if (errorMsg) {
            var err = new Error(errorMsg);
            err.status = 404;
            return next(err);
        }
        res.json( PostsModel.all() );
    })
});

module.exports = router;