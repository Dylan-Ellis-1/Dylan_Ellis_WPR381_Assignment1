const readline = require("readline-sync");

const api = require('./APIs');

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
            try {
                userName = readline.question("Enter the username: \n");
                data = api.getTweets(userName);

                let tweetData = JSON.parse(data);
                console.log('Tweets: ' + tweetData.tweets);
            } catch (error) {
                console.log('An unexpected error occurred see below: \n' + error.message);
            }
        break;

        case '2':
            
            try {
                song = readline.question("Enter the song name: \n");
                data = api.getSongInfo(song);

                let songInfo = JSON.parse(data);
                console.log('Artist: ' + songInfo.artist);
                console.log('Song: ' + songInfo.name);
                console.log('Preview: ' + songInfo.preview_url);
                console.log('Album: ' + songInfo.album);
            } catch (error) {
                console.log('An unexpected error occurred see below: \n' + error.message);
            }
        break;

        case '3':
            movie = readline.question("Enter the movie name: \n");
            console.log('Movie name: ' + movie);
        break;

        case '4':
            console.log('Bye bye\n');
        break;

        default:
            console.log('Invalid option entered\n');
      }
}