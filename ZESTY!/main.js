console.log("js is working");

//jQuery that retrieves the contents of the .txt file and loads into DOM object
$(function(){
  $( "#target" ).load( "http://127.0.0.1:5500/text.txt" );
});

//AJAX request to retrieve server-side file and console.log it, 
//or we could fill a DOM object with it.
var requestURL = 'http://127.0.0.1:5500/text.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'; //change this to 'text' for a txt file
request.send();
request.onload = function() {
  const superhero = request.response;
  console.log(superhero);
}