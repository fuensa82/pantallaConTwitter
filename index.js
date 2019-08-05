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

client.get("statuses/home_timeline",function(error,tweets,response){
  if(error) 
    throw error;
  console.log(tweets);  // The favorites.
  console.log(response);
});
var params = {q: '@AytoFuensalida'};
//client.get("search/tweets",params,function(error,tweets,response){
client.get("search/tweets",params,function(error,tweets,response){
  if(error) 
    throw error;
  console.log(tweets);  // The favorites.
  console.log(response);
});