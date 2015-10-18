

 google.maps.event.addDomListener(window, 'load', initialize);
  google.maps.event.addDomListener(window, 'load', initialize2);

var map;
function initialize2() {
	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
function initialize(){
    var input = document.getElementById('complete');
    alert("FSLJDFJKLS");
    var options = {
       types: ['(cities)'],
       componentRestrictions: {country: "us"}
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
 }
