const readline = require("readline-sync");
const SpotifySearch = require( 'spotify-metadata-search' );

let search = SpotifySearch();

let choice;

while (choice !== '4') {
    console.log();
    console.log('----------------------------------------------------------------');
    console.log("(1) Print latest tweets");
    console.log("(2) Perform a Spotify look-up for a song");
    console.log("(3) Query OMDb for movie details");
    console.log("(4) Exit");
    console.log('----------------------------------------------------------------\n');

    choice = readline.question("Pick an option: \n");

    switch(choice) {
        case '1':
            username = readline.question("Enter the username: \n");
            console.log('Username: ' + username);
        break;

        case '2':
            song = readline.question("Enter the song name: \n");
            search.track( song, 2, function ( err, data ) {
                if ( err ) {
                    console.log(err);
                }
                
                data;
            } );
        break;

        case '3':
            movie = readLineSync.question("Enter the movie name: \n");
            console.log('Movie name: ' + movie);
        break;

        case '4':
            console.log('Bye bye\n');
        break;

        default:
            console.log('Invalid option entered\n');
      }
}