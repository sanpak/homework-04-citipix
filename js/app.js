$(function() {

  //create a function to get value from USER'S input such as what city they type.
  
  function processCity() {
    var city = $('#city-type').val();
    

    //if a user submits New York/New York City/NYC
    if (city === "New York City" || city === "New York" || city === "NYC") {
      
      $('body').addClass('nyc');
    }

   }

  //when users click submit button, it calls the function getCity.
  $('#submit-btn').click(processCity);

  

  


});