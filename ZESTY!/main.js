
//jQuery that retrieves the contents of the .txt file and loads into DOM object
$.get("../text.json", function(data){
  $( "body" ).data("personData", data);
}, 'json');


function populateIndex() {
  //fill in homepage info
  $("#name").html($( "body" ).data( "personData" ).name);
  $("#jobtitle").html($( "body" ).data( "personData" ).jobtitle);
  $("#greeting").html($( "body" ).data( "personData" ).greeting);
  $("#whoami").html($( "body" ).data( "personData" ).whoami);
  $("#welcome").html($( "body" ).data( "personData" ).welcome);
  
}

function populateAbout() {
  //fill in about me info 
  $("#brand").html($( "body" ).data( "personData" ).brand);
  
  //personal section
  $("#aboutme1").html($( "body" ).data( "personData" ).aboutme1);
  $("#aboutme2").html($( "body" ).data( "personData" ).aboutme2);
  
  //work history section
  $("#title1").html($( "body" ).data( "personData" ).title1);
  $("#workhistory1").html($( "body" ).data( "personData" ).workhistory1);
  
  //skills section
  $("#title2").html($( "body" ).data( "personData" ).title2);
  let divSkills = document.querySelectorAll('.skill');
  let index = 0;
  $( "body" ).data( "personData" ).skills.forEach(
    (skill) => {
      divSkills[index].innerHTML = '<i class="fas fa-lemon"></i> ' + skill;
      index++;
    }
  );

  //hobbies section
  $("#title3").html($( "body" ).data( "personData" ).title3);
  let divHobbies = document.querySelectorAll('.hobby');
  index = 0;
  $( "body" ).data( "personData" ).hobbies.forEach(
    (hobby) => {
      divHobbies[index].innerHTML = '<i class="fas fa-lemon"></i> ' + hobby;
      index++;
    }
  );
}

function populateProjects() {
  //populate projects info
let divProjects = document.querySelectorAll('.project');
  let index = 0;
  $( "body" ).data( "personData" ).projects.forEach(
    (project) => {
      divProjects[index].innerHTML =
      '<a href="'+ project[0] + '">' +
        '<div class="card">' +
          '<img src="'+ project[1] +'" style="width:350px; height:200px;">' +
          '<div class="container">' +
            '<h4><b>'+ project[2] +'</b></h4>' +
            '<p>'+ project[3] +'</p>' +
          '</div>' +
        '</div>' +
      '</a>';
      index++;
    }
  );
}

function populateContact() {
  //populate contact info
  $("#contactEmail").attr('action', 'mailto:' + $( "body" ).data( "personData" ).email);
}

window.addEventListener("load", () => {
  if ($( "body" ).data( "personData" )) {
    let href = window.location.href.split('view/');
    switch (href[1]) {
      case 'index.html':
        populateIndex();
        break;
      case 'about.html':
        populateAbout();
        break;
      case 'projects.html':
        populateProjects();
        break;
      case 'contact.html':
        populateContact();
        break;
      default:
        break;
    }

    //fill in the nav and footer links
    $("#brand").html($( "body" ).data( "personData" ).brand);
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
});