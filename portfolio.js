
// script to run Google map on contact.htl page

window.onload=loadMap;

function loadMap() {
  var myLocation = {lat: 44.780310, lng: -93.797981};
  var home = "images/home.png";
  var food= "images/food.png";
  var school= "images/school.png"
  
var map = new google.maps.Map(document.getElementById('map_canvas'), {
  center: {lat: 44.772163, lng: -93.786560},
  zoom: 13,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});
var marker= new google.maps.Marker ({
  position: myLocation,
  map: map,
  icon: home,
  title: "Home Sweet Home"
});

var restaurant = new google.maps.Marker ({
  position: {lat: 44.768889, lng: -93.780556},
  map: map,
  title: 'Burkeys Bar',
  icon: food

});

var academy = new google.maps.Marker ({
  position: {lat: 44.762114, lng: -93.781869},
  map: map,
  title: 'Cologne Academy',
  icon: school
})

};

