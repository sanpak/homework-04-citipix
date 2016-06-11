$(function() {

  function getCity() {
    var city = $('#city-type').val();
    console.log(city);
  }

  $('#submit-btn').click(getCity);


});