var Twitter = require('twitter');

var fs=require('fs');
var variables={};

variables = JSON.parse(fs.readFileSync('variables.json', 'utf8'));

var client = new Twitter({
  consumer_key:"a1yK1VVXsyrXXG6xySdpwlG6z",
  consumer_secret:"Lfu3nkaTbOYwewnNOecsouF0xrKtHTdacYlBX8wwcYWAZSosKT",
  access_token_key: '155222158-9OKEzXzuoJnStWTK2mRwJUCL5FmSoXObjdIHchA5',
  access_token_secret: 'Yl6LWiLJPPBwVW7FSFYtxpdb6nzhz29E87Ff0HOUAnvue'
});
var params = {q: '@AytoFuensalida',count:5};
//id de mensajes: 1158684792365473792
//                1158025900664995841
client.get("statuses/show/1158684792365473792",params,function(error,tweets,response){
  if(error) 
    throw error;
  console.log(tweets);  // The favorites.
  console.log(response);
});
/*client.get("statuses/home_timeline",function(error,tweets,response){
  if(error) 
    throw error;
  console.log(tweets);  // The favorites.
  console.log(response);
});*/
var params = {q: 'fuensa82fonera',count:5};
client.get("search/tweets",params,function(error,tweets,response){
  if(error) 
    throw error;
  console.log(tweets);  // The favorites.
  console.log(response);
});
//direct_messages/events/list
params={user_id:"318965512"};//{screen_name: username, count:100  }
params={screen_name: "AytoFuensalida", count:2}
client.get("statuses/user_timeline",params,function(error,tweets,response){
  if(error) 
    throw error;
  console.log(tweets);  // The favorites.
  console.log(response);
});