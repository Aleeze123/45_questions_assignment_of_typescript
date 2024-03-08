function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        // tracks: tracks,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums, one with the optional track count
var album1 = make_album("Azlan", "red waves");
var album2 = make_album("Warda", "stones");
var album3 = make_album("Faiza", "Believe", 19);
console.log(album1);
console.log(album2);
console.log(album3);
