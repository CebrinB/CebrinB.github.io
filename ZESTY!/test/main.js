
//jQuery that retrieves the contents of a .json file and loads into DOM object
$.get("text.json", function(data){
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
  
  $("#aboutme1").html($( "body" ).data( "personData" ).aboutme1);
  $("#aboutme2").html($( "body" ).data( "personData" ).aboutme2);
  
  $("#title1").html($( "body" ).data( "personData" ).title1);
  $("#workhistory1").html($( "body" ).data( "personData" ).workhistory1);
  
  $("#title2").html($( "body" ).data( "personData" ).title2);
  let divSkills = document.querySelectorAll('.skill');
  index = 0;
  $( "body" ).data( "personData" ).skills.forEach(
    (skill) => {
      divSkills[index].innerHTML = '<i class="fas fa-lemon"></i> ' + skill;
      index++;
    }
  );

  $("#title3").html($( "body" ).data( "personData" ).title3);
  let divHobbies = document.querySelectorAll('.hobby');
  index = 0;
  $( "body" ).data( "personData" ).hobbies.forEach(
    (hobby) => {
      divHobbies[index].innerHTML = '<i class="fas fa-lemon"></i> ' + hobby;
      index++;
    }
  );

  //fill in the footer links
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

function populateProjects() {
  //populate projects info
  $("#brand").html($( "body" ).data( "personData" ).brand);

  $("#project1Site").attr('href', $( "body" ).data( "personData" ).project1Site);
  $("#project1Image").attr('src', $( "body" ).data( "personData" ).project1Image);
  $("#project1Title").html($( "body" ).data( "personData" ).project1Title);
  $("#project1Technologies").html($( "body" ).data( "personData" ).project1Technologies);

  $("#project2Site").attr('href', $( "body" ).data( "personData" ).project2Site);
  $("#project2Image").attr('src', $( "body" ).data( "personData" ).project2Image);
  $("#project2Title").html($( "body" ).data( "personData" ).project2Title);
  $("#project2Technologies").html($( "body" ).data( "personData" ).project2Technologies);

  $("#project3Site").attr('href', $( "body" ).data( "personData" ).project3Site);
  $("#project3Image").attr('src', $( "body" ).data( "personData" ).project3Image);
  $("#project3Title").html($( "body" ).data( "personData" ).project3Title);
  $("#project3Technologies").html($( "body" ).data( "personData" ).project3Technologies);

  $("#project4Site").attr('href', $( "body" ).data( "personData" ).project4Site);
  $("#project4Image").attr('src', $( "body" ).data( "personData" ).project4Image);
  $("#project4Title").html($( "body" ).data( "personData" ).project4Title);
  $("#project4Technologies").html($( "body" ).data( "personData" ).project4Technologies);

  $("#project5Site").attr('href', $( "body" ).data( "personData" ).project5Site);
  $("#project5Image").attr('src', $( "body" ).data( "personData" ).project5Image);
  $("#project5Title").html($( "body" ).data( "personData" ).project5Title);
  $("#project5Technologies").html($( "body" ).data( "personData" ).project5Technologies);

  $("#project6Site").attr('href', $( "body" ).data( "personData" ).project6Site);
  $("#project6Image").attr('src', $( "body" ).data( "personData" ).project6Image);
  $("#project6Title").html($( "body" ).data( "personData" ).project6Title);
  $("#project6Technologies").html($( "body" ).data( "personData" ).project6Technologies);

  $("#project7Site").attr('href', $( "body" ).data( "personData" ).project7Site);
  $("#project7Image").attr('src', $( "body" ).data( "personData" ).project7Image);
  $("#project7Title").html($( "body" ).data( "personData" ).project7Title);
  $("#project7Technologies").html($( "body" ).data( "personData" ).project7Technologies);

  $("#project8Site").attr('href', $( "body" ).data( "personData" ).project8Site);
  $("#project8Image").attr('src', $( "body" ).data( "personData" ).project8Image);
  $("#project8Title").html($( "body" ).data( "personData" ).project8Title);
  $("#project8Technologies").html($( "body" ).data( "personData" ).project8Technologies);

  $("#project9Site").attr('href', $( "body" ).data( "personData" ).project9Site);
  $("#project9Image").attr('src', $( "body" ).data( "personData" ).project9Image);
  $("#project9Title").html($( "body" ).data( "personData" ).project9Title);
  $("#project9Technologies").html($( "body" ).data( "personData" ).project9Technologies);
  

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
  $("#brand").html($( "body" ).data( "personData" ).brand);
  $("#contactEmail").attr('action', $( "body" ).data( "personData" ).contactEmail);

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

window.addEventListener("load", () => {
  if ($( "body" ).data( "personData" )) {
    populateAbout();
  } 
});