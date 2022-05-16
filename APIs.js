const TwitWebApi = require('twit');  // define the Twitter API
const SpotifyWebApi = require('spotify-web-api-node');  // define the Spotify API
const OMdbWebApi = new (require('omdbapi'))('dfea9817');  // define the OMdb Api and create an object for it
const fs = require('fs');  // define the object that will be used to handel file input and output

const T = new TwitWebApi({  // create twitter object
    consumer_key: 'kbB99piXAAou57ht6Gv9XsGRc',
  consumer_secret: 'tH6OiDkI9t9BI0s5LN22w5ecPURyVdWT2RKSLK4S542PYHamCV-LE6uR6P3UKOwUecs-4WA',
  access_token: '1524380101433044992-Yr4SEg12D8b8zFaLfjOncP8SJuAgur',
  access_token_secret: 'pJQvj3P9JdAbZvYOljksLbumERaeWsbysJWQw70MBjI9n'
});

const spotifyApi = new SpotifyWebApi(); // create spotify object

module.exports = {  // export all the functions at once
    getTweets: function(userName){  // difine a function to get the tweets
        let params = {query: userName, count: 20} 
        
        T.get('search/tweets', params, (error, data) => {  // call the get method on the twitter object to get the tweet
            if (error) {  // handel the error if there is one
                console.log('An error occurred while trying to search for tweets: ' + error);  // display the error message
            } 
            else {  // return the tweets
                return data.body;
            }
        });  
    },

    getSongInfo: function(songName){  // define the function to get song information
        spotifyApi.searchTracks(songName)  // call the searchTracks function to get the information
            .then(data => {
                return data.body;  // return the information
            }, 
            function(error) {  // handle errors that might be thrown
                console.log('An error occurred while trying to search for the song: ' + error);  // display the error message
        });
    },

    getMovieInfo: function(movieName){  // define the function to get movie information
        OMdbWebApi.get({title: movieName})  // call the get method on the omdb object to get the information
            .then(data => {
                return data.body;  // return the information
            }, 
            function(error) {  // handle errors that might be thrown
                console.log('An error occurred while trying to search for the movie: ' + error);  // display the error message
        });
    },

    fileInfo: function(){  // define the function to execute a query from a text file
        let arrData = [];  // create array that will store the query and search string

        try {  // handle errors that might be thrown
            let data = fs.readFileSync('random.text');  // read the data from the file
            let strData = data.toString();  // convert the data to a string

            arrData = strData.split(',');  // split the string into the query and search string
            
            if (arrData[0] === 'Song name'){  // check if the query is for a song
                return getSongInfo(arrData[1]);  // return the song information
            }
            else if(arrData[0] === 'User name'){  // check if the query is for a twitter user
                return this.getTweets(arrData[1]);  // return the user tweets
            }
            else{
                return 'Invalid query';  // display error message is query is invalid
            }

        } catch(error) {
            console.log('Error:', error.message);
        }          
    }
}
