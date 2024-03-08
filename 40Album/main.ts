function make_album(artist: string, title: string, tracks?: number): object{
    let album: object ={
        artist: artist,
        title: title,
        // tracks: tracks,
    };
    if (tracks){
        album.tracks = tracks;
    }
    return album;
}
// Create three albums, one with the optional track count
let album1 = make_album("Azlan", "red waves");
let album2 = make_album("Warda", "stones");
let album3 = make_album("Faiza", "Believe", 19);

console.log(album1);
console.log(album2);
console.log(album3);