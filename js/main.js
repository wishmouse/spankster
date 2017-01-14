
function randomNumber() {
   var mathRandom =  Math.floor(Math.random()* 8+1);

   document.body.appendChild(countdown).play()

   setTimeout(function(){document.getElementById("punishment").innerHTML="No technology for 20 mins";}, 5000);


 if (mathRandom === 1) {
    setTimeout(function(){document.getElementById("punishment").innerHTML="No technology for 20 mins";}, 5000);
  } else if (mathRandom === 2) {
    setTimeout(function(){document.getElementById("punishment").innerHTML="No TV for the rest of the day";}, 5000);
  } else if (mathRandom === 3) {
    setTimeout(function(){document.getElementById("punishment").innerHTML="No phone for the rest of the day";}, 5000);
  } else if (mathRandom === 4) {
    setTimeout(function(){document.getElementById("punishment").innerHTML="Clean the bathroom";}, 5000);
  } else if (mathRandom === 5) {
    setTimeout(function(){document.getElementById("punishment").innerHTML="Tidy your bedroom";}, 5000);
  } else if (mathRandom === 6) {
    setTimeout(function(){document.getElementById("punishment").innerHTML="Make your bed";}, 5000);
  } else if (mathRandom === 7) {
    setTimeout(function(){document.getElementById("punishment").innerHTML="Put away your cloths";}, 5000);
  } else {
    setTimeout(function(){document.getElementById("punishment").innerHTML="Make Heidi tea.";}, 5000);
  }

};


/*
switch (newpunishment) {
  case <= 0.1:
    return "punishment1";
    break;
  case <= 0.2:
    return "punishment2";
    break;
  case <= 0.3:
    return "punishment3";
    break;
  case <= 0.4:
    return "punishment4";
    break;
  case <= 0.5:
    return "punishment5";
    break;
  case <= 0.6:
    return "punishment6";
    break;
  case <= 0.7:
    return "punishment7";
    break;
  case <= 0.8:
    return "punishment8";
    break;
  case <= 0.9:
    return "punishment9";
    break;
  case <= 1:
    return "punishment10";
    break;

}



//$(document).ready(function(){
    //button click
    //$("button").click(function(){
        //$("p:first").replaceWith("\"Life is uncertain. Eat dessert first.\" -Ernestine Ulmer");
    //});



//});//end of document ready function
*/
