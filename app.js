const readline = require("readline-sync");  // create an object for readline to be able to get user input.

const api = require('./APIs');  // import the local module that contains the code to make API calls

let choice;  // define a variable that will store the users choice

while (choice !== '5') {  // keep on showing the menu to the user until they choose to exit
    // display the menu options
    console.log();
    console.log('----------------------------------------------------------------');
    console.log('(1) Print latest tweets');
    console.log('(2) Perform a Spotify look-up for a song');
    console.log('(3) Query OMDb for movie details');
    console.log('(4) Read a query from a text file')
    console.log('(5) Exit');
    console.log('----------------------------------------------------------------\n');

    choice = readline.question("Pick an option: \n");  // read the user input into the choice variable

    switch(choice) {  // switch on the users choice to perform the option they selected
        case '1':
            try {  // error handeling to make sure the application doesn't crash when an error is encountered
                userName = readline.question("Enter the username: \n");  // ask for the username
                data = api.getTweets(userName);  // get the tweets for the specified username

                let tweetData = JSON.parse(data);  // store the tweet data in an object that can be used to retrieve only the tweets
                console.log('Tweets: ' + tweetData.tweets); // display the tweet data
            } catch (error) {
                console.log('An unexpected error occurred see below: \n' + error.message);
            }
        break;

        case '2':
            try {  // error handeling to make sure the application doesn't crash when an error is encountered
                song = readline.question("Enter the song name: \n");  // ask for the song name
                data = api.getSongInfo(song);  // get the info for the specified song

                let songInfo = JSON.parse(data);  // store the song information in an object that can be used to retrieve the needed information
                console.log('Artist: ' + songInfo.artist);  // display the artist information
                console.log('Song: ' + songInfo.name);  // display the song information
                console.log('Preview: ' + songInfo.preview_url);  // display the preview link
                console.log('Album: ' + songInfo.album);  // display the album information
            } catch (error) { 
                console.log('An unexpected error occurred see below: \n' + error.message);
            }
        break;

        case '3':          
            try {
                movie = readline.question("Enter the movie name: \n");
                data = api.getMovieInfo(movie);

                let movieInfo = JSON.parse(data);
                console.log('Movie details: \n' + movieInfo);
            } catch (error) {
                console.log('An unexpected error occurred see below: \n' + error.message);
            }
        break;

        case '4':
            try {  // error handeling to make sure the application doesn't crash when an error is encountered
                console.log(api.fileInfo());  // display the information returned from running the query in the text file
            } catch (error) {
                console.log('An unexpected error occurred see below: \n' + error.message);
            }
        break;

        case '5':
            console.log('Goodbye come back soon.\n');  // display a goodbye message
        break;

        default:  // handel any invalid input from the user
            console.log('Invalid option entered, please enter a valid option in the menu (1-5)\n');  // display a message to say an incorrect option was chosen
      }
}