var Twitter = require('twitter');
//var Twitter = require('twitter-js-client').Twitter;
//var Twitter = require('twit');
var fs=require('fs');
var variables={};
/*fs.readFileSync('variables.json', 'utf8', function(err,data) {
  if(err) throw err;
  variables = JSON.parse(data);
  console.log(variables);
  console.log(data);
});*/
variables = JSON.parse(fs.readFileSync('variables.json', 'utf8'));

var client = new Twitter({
  consumer_key: variables.consumer_key,
  consumer_secret: variables.consumer_secret,
  access_token_key: variables.access_token_key,
  access_token_secret: variables.access_token_secret,
  access_token: variables.access_token_key,
  timeout_ms:60*1000
});

/*client.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data);
});*/

/*client.getUserTimeline({user_id: "155222158",count: '1'}, function(err){
  console.log(err);
},function(data){
  console.log(data);
});*/
var params = {screen_name: 'nodejs'};
client.get("statuses/home_timeline",function(error,tweets,response){
  if(error) throw error;
  console.log(tweets);  // The favorites.
  console.log(response);
});