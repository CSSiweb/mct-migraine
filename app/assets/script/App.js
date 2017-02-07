var $ = require('jquery');

var Person = require('./modules/Person');


alert("this is a test for our Webpack automation!");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "reddish");
jane.greet();


$("h1").remove();