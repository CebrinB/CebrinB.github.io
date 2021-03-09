
//jQuery that retrieves the contents of the .txt file and loads into DOM object
// $(function(){
//   $( "#target" ).load("http://127.0.0.1:5500/text.json");
// });


$.get("http://127.0.0.1:5500/text.json", function(data){
  $( "body" ).data("personData", data);
}, 'json');


function populateIndex() {
  //fill in homepage info
  $("#brand").html($( "body" ).data( "personData" ).brand);
  $("#name").html($( "body" ).data( "personData" ).name);
  $("#jobtitle").html($( "body" ).data( "personData" ).jobtitle);
  $("#greeting").html($( "body" ).data( "personData" ).greeting);
  $("#whoami").html($( "body" ).data( "personData" ).whoami);
  $("#welcome").html($( "body" ).data( "personData" ).welcome);

  //fill in footer links
  $("#phone").html($( "body" ).data( "personData" ).phone);
  $("#phone").attr('href', 'tel:' + ($( "body" ).data( "personData" ).phone));
  $("#email").html($( "body" ).data( "personData" ).email);
  $("#email").attr('href', 'mailto:' + ($( "body" ).data( "personData" ).email));
  $('a[id^="facebook"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).facebook));
  });
  $('a[id^="twitter"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).twitter));
  });
  $('a[id^="linkedin"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).linkedin));
  });
  $('a[id^="instagram"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).instagram));
  });
  
}

function populateAbout() {
  //fill in about me info 
  $("#brand").html($( "body" ).data( "personData" ).brand);
  $("#section1").html($( "body" ).data( "personData" ).section1);
  $("#description1").html($( "body" ).data( "personData" ).description1);
  $("#section2").html($( "body" ).data( "personData" ).section2);
  $("#description2").html($( "body" ).data( "personData" ).description2);
  $("#section3").html($( "body" ).data( "personData" ).section3);
  $("#skill1").html($( "body" ).data( "personData" ).skill1);
  $("#skill2").html($( "body" ).data( "personData" ).skill2);
  $("#skill3").html($( "body" ).data( "personData" ).skill3);
  $("#skill4").html($( "body" ).data( "personData" ).skill4);
  $("#skill5").html($( "body" ).data( "personData" ).skill5);
  $("#skill6").html($( "body" ).data( "personData" ).skill6);
  $("#skill7").html($( "body" ).data( "personData" ).skill7);

  //fill in the footer links
  $("#phone").attr('href', 'tel:' + ($( "body" ).data( "personData" ).phone));
  $("#email").html($( "body" ).data( "personData" ).email);
  $("#email").attr('href', 'mailto:' + ($( "body" ).data( "personData" ).email));
  $('a[id^="facebook"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).facebook));
  });
  $('a[id^="twitter"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).twitter));
  });
  $('a[id^="linkedin"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).linkedin));
  });
  $('a[id^="instagram"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).instagram));
  });
}

function populateProjects() {
  //populate projects info

  //fill in the footer links
  $("#phone").attr('href', 'tel:' + ($( "body" ).data( "personData" ).phone));
  $("#email").html($( "body" ).data( "personData" ).email);
  $("#email").attr('href', 'mailto:' + ($( "body" ).data( "personData" ).email));
  $('a[id^="facebook"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).facebook));
  });
  $('a[id^="twitter"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).twitter));
  });
  $('a[id^="linkedin"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).linkedin));
  });
  $('a[id^="instagram"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).instagram));
  });
}

function populateContact() {
  //populate contact info

  //fill in the footer links
  $("#phone").attr('href', 'tel:' + ($( "body" ).data( "personData" ).phone));
  $("#email").html($( "body" ).data( "personData" ).email);
  $("#email").attr('href', 'mailto:' + ($( "body" ).data( "personData" ).email));
  $('a[id^="facebook"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).facebook));
  });
  $('a[id^="twitter"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).twitter));
  });
  $('a[id^="linkedin"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).linkedin));
  });
  $('a[id^="instagram"]').each(function() { 
    $(this).attr('href', ($( "body" ).data( "personData" ).instagram));
  });
}
















//AJAX request to retrieve server-side file and console.log it, 
//or we could fill a DOM object with it.
// var requestURL = 'http://127.0.0.1:5500/text.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json'; //change this to 'text' for a txt file
// request.send();
// request.onload = function() {
//   const superhero = request.response;
//   console.log(superhero);
// }