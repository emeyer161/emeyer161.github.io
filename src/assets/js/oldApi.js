var express = require('express');
var router = express.Router();

// GET post by ID
router.get('/:id', function(req, res) {
    res.json(executeById(req.params.id, req.db.posts, 'get'));
});


// GET all posts
router.get('/', function(req, res) {
    res.json( req.db.posts );
});


// PUT post by ID
router.put('/:id', function(req, res) {
    // Build our updated db object. *Form values rely on the "name" attributes
    var newEntry = {
        id: req.params.id, 
        title: req.body.title || null, 
        body: req.body.body || null, 
        created_at: Date.now(), 
        updated_at: Date.now()
    }

    executeById( req.params.id, req.db.posts, 'put', newEntry );
    res.sendfile( './src/assets/views/index.html' );
});


// POST a new entry
router.post('/', function(req, res) {
    // Build our new db object. *Form values rely on the "name" attributes
    var newEntry = {
        id: req.db.posts.length+1, 
        title: req.body.title || null, 
        body: req.body.body || null, 
        created_at: Date.now(), 
        updated_at: Date.now()
    }

    // Submit to the DB
    req.db.posts.push( newEntry );
    res.sendfile( './src/assets/views/index.html' );
});


// DELETE post by ID
router.delete('/:id', function(req, res) {
    executeById( req.params.id, req.db.posts, 'delete' );
    res.sendfile( './src/assets/views/index.html' );
});


// Helper function to locate entry by ID
function executeById(id, source, task, newEntry) {
    for (var i=0; i<source.length; i++) {
        if (source[i].id == id) {
            switch (task) {
                case 'get':
                    return source[i];
                case 'put':
                    source[i] = newEntry;
                    return;
                case 'delete':
                    source.splice(i,1); // delete source[i];
                    return;
            }
        }
    }
    throw "Couldn't find object with id: " + id;
}

module.exports = router;
