/************
 * DATABASE *
 ************/

var db = require("../models");

// GET /api/albums
function index(req, res) {
    db.Album.find({}, function(err, allAlbums) {
        if (err) {
            return console.log(err);
        }
        res.json({
            albums: allAlbums
        });
    });
    // FILL ME IN !
}

function create(req, res) {
    // FILL ME IN !
    var newAlbum = new db.Album({
        artistName: req.body.artistName,
        name: req.body.name,
        releaseDate: req.body.releaseDate,
        genres: req.body.genres.split(', ')
    });
    newAlbum.save(function(err, savedAlbum) {
        if (err) {
            return console.log('Cannot create a new album!');
        }
        console.log("Saved", newAlbum);
        res.json(savedAlbum);
    });
}

function show(req, res) {
    // FILL ME IN !
}

function destroy(req, res) {
    // FILL ME IN !
}

function update(req, res) {
    // FILL ME IN !
}


// export public methods here
module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update
};
