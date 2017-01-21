// JavaScript Document


 var filesYo = require('fs');
 var http = require("http");
 filesYo.writeFile(__dirname + "/index.html","<h1>HTML Rocks!</h1>");
 
 var nbaImage = "http://www.logodesignlove.com/wp-content/uploads/2011/04/nba-logo-on-wood.jpg";
 var nbaFile = filesYo.createWriteStream(__dirname + "/nbaImage.jpg");
 var request = http.get(nbaImage, function(response){
	 response.pipe(nbaFile);
	 });
 