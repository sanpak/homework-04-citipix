$(function() {

  //create a function to get value from USER'S input such as what city they type.
  
 $('#cities').submit(function(event) {

    //assign input cities to a variable
    var city = $('#city-type').val();  

    //prevent Default form behavior from happening
    event.preventDefault();



    console.log("city", city);

    //if else statment to determine which background pcitures to show
    if (city == "New York City" || city === "NYC" || city === "New York") {
      $("body").attr("class","nyc");
    } else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
      $("body").attr("class","sf");
    } else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
      $("body").attr("class","la");
    } else if (city === "Austin" || city === "ATX") {
      $("body").attr("class","austin");
    } else if (city === "Sydney" || city === "SYD") {
      $("body").attr("class","sydney");
    }

    //clear text field
    $("#city-type").val("");


  });
  

  


});