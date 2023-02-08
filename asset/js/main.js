AOS.init();
(function() {
  "use strict";

    var typed = new Typed(".typed",{
    strings: [,  "Designer", "Developer", "Freelancer", "Photographer"] ,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true

    })


})()


function initialize() {
  var propertiPeta = {
    center:new google.maps.LatLng(-7.246244, 108.372540),
    zoom:9,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
  var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
  
  // membuat Marker
  var marker=new google.maps.Marker({
      position: new google.maps.LatLng(-7.246244, 108.372540),
      map: peta
  });

}

// event jendela di-load  
google.maps.event.addDomListener(window, 'load', initialize);