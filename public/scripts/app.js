/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

var template;
var $albumsList = $('#albumTarget');
var allAlbums = [];


$(document).ready(function() {
    console.log('app.js loaded!');

    $.ajax({
        method: 'GET',
        url: '/api/albums',
        type: 'json',
        success: handleGetAlbumSuccess,
        error: handleGetAlbumError
    });

    $('#newAlbumForm').on('submit', function(e) {
        e.preventDefault();
        console.log('new album serialized', $(this).serializeArray());
        $.ajax({
            method: 'POST',
            url: '/api/albums',
            data: $(this).serialize(),
            success: newAlbumSuccess,
            error: newAlbumError
        });
    });
});


function handleGetAlbumSuccess(data) {
    var receivedAlbum = data.albums;
    console.log(data);
    receivedAlbum.forEach(function renderOneAlbum(album) {
        renderAlbum(album);
    });
}

function handleGetAlbumError(a, b, c) {
    console.log("Error!");
}

function newAlbumSuccess(album) {
    $('#newAlbumForm input').val('');
    renderAlbum(album);

}

function newAlbumError() {
    console.log('newAlbum error!');
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
    var source = $('#album-template').html();
    console.log(source);
    var template = Handlebars.compile(source);
    var albumHtml = template(album);
    $('#albums').prepend(albumHtml);
}
