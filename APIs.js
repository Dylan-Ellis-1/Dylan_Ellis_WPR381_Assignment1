var Twit = require('twit');

var T = new Twit({
    consumer_key: 'kbB99piXAAou57ht6Gv9XsGRc',
  consumer_secret: 'tH6OiDkI9t9BI0s5LN22w5ecPURyVdWT2RKSLK4S542PYHamCV-LE6uR6P3UKOwUecs-4WA',
  access_token: '1524380101433044992-Yr4SEg12D8b8zFaLfjOncP8SJuAgur',
  access_token_secret: 'pJQvj3P9JdAbZvYOljksLbumERaeWsbysJWQw70MBjI9n'
});

module.exports = {
    getTweets: function(userName){      
        Name = userName;
        
        var params = {query: userName, count: 20} 
        
        T.get('search/tweets', params,searchedData); 
        function searchedData(error, data) {
            if (error) {
                console.log('An error occurred while trying to search for tweets: ' + error);
            } else {
                return data;
            }
        }
    },
    rArea: function(lenth, widgt){
        return (lenth * widgt).toFixed(2)
    },
    cPerim: function(radius){
        return (2*pi*radius).toFixed(2)
    },
    rPerim: function(lenth, widgt){
        return (2*(lenth*widgt)).toFixed(2)
    }
}
