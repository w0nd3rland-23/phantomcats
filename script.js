document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map and set its view to the center of Australia
    var map = L.map('map').setView([-25.2744, 133.7751], 4);
  
    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Array of locations with info (example locations in Australia)
    var locations = [
      { coords: [-37.8333, 148.5833], info: "<b>Gippsland, Victoria</b><br>Reported sightings of big cats in the region." },
      { coords: [-33.7000, 150.3000], info: "<b>Blue Mountains, NSW</b><br>Several reports of big cat sightings." },
      { coords: [-37.2140, 142.4536], info: "<b>Grampians, Victoria</b><br>Numerous big cat sightings in the area." },
      { coords: [-33.5446, 150.6814], info: "<b>Hawkesbury, NSW</b><br>Frequent reports of big cat sightings." },
      { coords: [-26.6500, 153.0667], info: "<b>Sunshine Coast, QLD</b><br>Big cat sightings have been reported." },
      { coords: [-28.0173, 153.1650], info: "<b>Canungra, QLD</b><br>Big cat sightings have been reported." },
      { coords: [-33.4833, 150.1528], info: "<b>Lithgow, NSW</b><br>Several reports of big cat sightings." },
      { coords: [-38.6667, 143.5833], info: "<b>Otways, Victoria</b><br>Numerous big cat sightings in the area." },
      { coords: [-17.2638, 145.4870], info: "<b>Atherton Tablelands, QLD</b><br>Frequent reports of big cat sightings." },
      { coords: [-38.3818, 142.4884], info: "<b>Warrnambool, Victoria</b><br>Big cat sightings have been reported." },
      { coords: [-31.3333, 138.5833], info: "<b>Flinders Ranges, SA</b><br>Several reports of big cat sightings." },
      { coords: [-33.9550, 115.0750], info: "<b>Margaret River, WA</b><br>Numerous big cat sightings in the area." },
      { coords: [-32.0500, 151.5000], info: "<b>Barrington Tops, NSW</b><br>Frequent reports of big cat sightings." },
      { coords: [-31.0905, 150.9291], info: "<b>Tamworth, NSW</b><br>Big cat sightings have been reported." },
      { coords: [-38.3435, 145.0340], info: "<b>Mornington Peninsula, Victoria</b><br>Several reports of big cat sightings." }
    ];
  
    // Loop through the locations and add markers with popups
    locations.forEach(function(location) {
      var marker = L.marker(location.coords).addTo(map);
      marker.bindPopup(location.info);
    });
  });
  