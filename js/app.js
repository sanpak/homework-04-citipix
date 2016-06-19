$(function() {

  //create a function to get value from USER'S input such as what city they type.
  
 $('#cities').submit(function(event) {

    //assign input cities to a variable
    //change user input to all lower case
    //so the input will not be case sensitive.
    var city = ($('#city-type').val()).toLowerCase();  

    //prevent Default form behavior from happening
    event.preventDefault();



    console.log("city", city);

    //if else statment to determine which background pcitures to show
    if (city == "new york city" || city === "nyc" || city === "new york") {
      //if value of city = New York City or NYC or New York (not case sensitive)
      //background pciture will be NYC jpg
      $("body").attr("class","nyc");

    } else if (city === "san francisco" || city === "sf" || city === "bay area") {
      //if value of city = San Francisco or SF or Bay Area (not case sensitive)
      //background picture will be SF jpg
      $("body").attr("class","sf");

    } else if (city === "los angeles" || city === "la" || city === "lax") {
      //if value of city = Los Angeles or LA or LAX (not case sensitive)
      //background picture will be LA jpg
      $("body").attr("class","la");

    } else if (city === "austin" || city === "atx") {
      //if value of city = Austin or ATX (not case sensitive)
      //background picture will be austin jpg
      $("body").attr("class","austin");

    } else if (city === "sydney" || city === "syd") {
      //if value of city = Sydney or SYD (not case sensitive)
      //background picture will sydney jpg
      $("body").attr("class","sydney");
    }

    //clear text field
    $("#city-type").val("");


  });
  

  


});