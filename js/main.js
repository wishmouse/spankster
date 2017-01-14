
function randomNumber() {
   var mathRandom =  Math.floor(Math.random()* 8+1);

console.log(mathRandom);

 if (mathRandom === 1) {
    document.getElementById("quote").innerHTML = "No technology for 20 mins.";
  } else if (mathRandom === 2) {
    document.getElementById("quote").innerHTML = "No TV for the rest of the day";
  } else if (mathRandom === 3) {
    document.getElementById("quote").innerHTML = "No phone for the rest of the day";
  } else if (mathRandom === 4) {
    document.getElementById("quote").innerHTML = "Clean the bathroom.";
  } else if (mathRandom === 5) {
    document.getElementById("quote").innerHTML = "Tidy your bedroom";
  } else if (mathRandom === 6) {
    document.getElementById("quote").innerHTML = "Make your bed.";
  } else if (mathRandom === 7) {
    document.getElementById("quote").innerHTML = "Put away your cloths";
  } else {
    document.getElementById("quote").innerHTML = "Wash dishes";
  }
};


/*
switch (newQuote) {
  case <= 0.1:
    return "quote1";
    break;
  case <= 0.2:
    return "quote2";
    break;
  case <= 0.3:
    return "quote3";
    break;
  case <= 0.4:
    return "quote4";
    break;
  case <= 0.5:
    return "quote5";
    break;
  case <= 0.6:
    return "quote6";
    break;
  case <= 0.7:
    return "quote7";
    break;
  case <= 0.8:
    return "quote8";
    break;
  case <= 0.9:
    return "quote9";
    break;
  case <= 1:
    return "quote10";
    break;

}



//$(document).ready(function(){
    //button click
    //$("button").click(function(){
        //$("p:first").replaceWith("\"Life is uncertain. Eat dessert first.\" -Ernestine Ulmer");
    //});



//});//end of document ready function
*/
