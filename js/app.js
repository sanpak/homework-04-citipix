$(function() {

  //create a function to get value from USER'S input such as what city they type.
  
 $('#cities').submit(function(event) {

    //assign input cities to a variable
    var city = $('#city-type').val();  

    //prevent Default form behavior from happening
    event.preventDefault();



    console.log("city", city);

    //if else statment to determine which background pcitures to show
    if (city == "New York City" || "NYC" || "New York") {
      $("body").addClass("nyc");
    } else if (city === "San Francisco" || "SF" || "Bay Area") {
      $("body").addClass("sf");
    } else if (city === "Los Angeles" || "LA" || "LAX") {
      $("body").addClass("la");
    } else if (city === "Austin" || "ATX") {
      $("body").addClass("austin");
    } else if (city === "Sydney" || "SYD") {
      $("body").addClass("sydney");
    }

    //clear text field
    $("#city-type").val("");


  });
  

  


});