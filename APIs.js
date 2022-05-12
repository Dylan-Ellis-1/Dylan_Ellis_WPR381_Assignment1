const TwitWebApi = require('twit');
const SpotifyWebApi = require('spotify-web-api-node');
const OMdbWebApi = new (require('omdbapi'))('dfea9817');

const T = new TwitWebApi({
    consumer_key: 'kbB99piXAAou57ht6Gv9XsGRc',
  consumer_secret: 'tH6OiDkI9t9BI0s5LN22w5ecPURyVdWT2RKSLK4S542PYHamCV-LE6uR6P3UKOwUecs-4WA',
  access_token: '1524380101433044992-Yr4SEg12D8b8zFaLfjOncP8SJuAgur',
  access_token_secret: 'pJQvj3P9JdAbZvYOljksLbumERaeWsbysJWQw70MBjI9n'
});

const spotifyApi = new SpotifyWebApi();

const omdb = new OMdbWebAPI();


module.exports = {
    getTweets: function(userName){      
        Name = userName;
        
        let params = {query: userName, count: 20} 
        
        T.get('search/tweets', params,searchedData); 
        function searchedData(error, data) {
            if (error) {
                console.log('An error occurred while trying to search for tweets: ' + error);
            } else {
                return data.body;
            }
        }
    },

    getSongInfo: function(songName){
        spotifyApi.searchTracks(songName)
            .then(data => {
                return data.body;
            }, 
            function(error) {
                console.log('An error occurred while trying to search for the song: ' + error);
        });
    },

    getMovieInfo: function(movieName){
        OMdbWebApi.get({title: movieName})
            .then(data => {
                return data.body;
            }, 
            function(error) {
                console.log('An error occurred while trying to search for the movie: ' + error);
        });
    }
}
