"use strict";
let Twit = require('twit');

let T = new Twit({
    consumer_key: 'xcx1DsvbZem5zxWTmF38w4vPV',
    consumer_secret: 'Snf0hzMRoSxYjiXatGL8eooQq5ZoJZwnDpfg2EepB04SB7psdq',
    access_token: '705341471981969409-suPnG1NRkxX7fDwBshUu4sKvLfUCqsR',
    access_token_secret: 'oTy5HjqZdE0trFBNy42AR38jk730jWi3FH4mQR4wGZENF',
    timeout_ms: 60 * 1000,
    // optional HTTP request timeout to apply to all requests.
});
let screen_name = 'immersivetech_';

let express = require('express');
let app = express();
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    //
    //  search twitter for all tweets containing the word 'banana' since July 11, 2011
    //


    T.get('statuses/user_timeline', { screen_name: 'immersivetech_', count: 100 }, function(err, data, response) {
        let filteredData = data.filter(d => (new Date(d.created_at) - new Date()) > -604800000);
        let orderedData = filteredData.sort((a, b) => b.retweet_count - a.retweet_count);
        res.render('index', { title: 'Hey', message: 'Hello there!', data: orderedData });
        //res.send(data);
    })
})

app.listen(3000)
