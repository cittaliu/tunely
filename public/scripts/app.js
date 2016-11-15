/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = [];
// sampleAlbums.push({
//     artistName: 'Ladyhawke',
//     name: 'Ladyhawke',
//     releaseDate: '2008, November 18',
//     genres: ['new wave', 'indie rock', 'synth pop']
// });
// sampleAlbums.push({
//     artistName: 'The Knife',
//     name: 'Silent Shout',
//     releaseDate: '2006, February 17',
//     genres: ['synth pop', 'electronica', 'experimental']
// });
// sampleAlbums.push({
//     artistName: 'Juno Reactor',
//     name: 'Shango',
//     releaseDate: '2000, October 9',
//     genres: ['electronic', 'goa trance', 'tribal house']
// });
// sampleAlbums.push({
//     artistName: 'Philip Wesley',
//     name: 'Dark Night of the Soul',
//     releaseDate: '2008, September 12',
//     genres: ['piano']
// });
/* end of hard-coded data */


var template;


$(document).ready(function() {
    console.log('app.js loaded!');

    $.ajax({
        method: 'GET',
        url: '/api/albums',
        type: 'json',
        success: handleGetAlbumSuccess,
        error: handleGetAlbumError
    });

});

function handleGetAlbumSuccess(data) {
    var receivedAlbum = data.albums;
    console.log(data);
    receivedAlbum.forEach(function renderOneAlbum(album) {
        renderAlbum(album);
    });
}

function handleGetAlbumError(a, b, c){
  console.log("Error!");
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
    var source = $('#album-template').html();
    console.log(source);
    var template = Handlebars.compile(source);
    var albumHtml = template(album);
    $('#albums').prepend(albumHtml);
}
