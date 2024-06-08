document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map and set its view to the center of Australia
    var map = L.map('map').setView([-25.2744, 133.7751], 4);
  
    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Array of locations with info (example locations in Australia)
    var locations = [
        { coords: [-37.8333, 148.5833], info: "<b>Gippsland, Victoria</b><br>Reports of big cat sightings. <a href='https://www.gippslandtimes.com.au/news/2020/02/27/black-panther-mystery-continues-to-fire-our-imaginations/'>Source</a>" },
        { coords: [-33.7000, 150.3000], info: "<b>Blue Mountains, NSW</b><br>Confirmed paw prints discovered. <a href='https://www.9news.com.au/national/blue-mountains-panther-giant-paw-print-discovered-is-it-real/4c70f3a7-be11-4964-8335-27b693023a22'>Source</a>" },
        { coords: [-37.2140, 142.4536], info: "<b>Grampians, Victoria</b><br>Elusive puma sightings. <a href='https://www.theleader.com.au/story/8419621/the-elusive-grampians-pumas-legacy/'>Source</a>" },
        { coords: [-33.5446, 150.6814], info: "<b>Hawkesbury, NSW</b><br>Possible panther encounters. <a href='https://www.hawkesburygazette.com.au/story/5382400/have-you-seen-a-panther-in-the-flesh/'>Source</a>" },
        { coords: [-26.6500, 153.0667], info: "<b>Sunshine Coast, QLD</b><br>Recent big cat sightings. <a href='https://www.couriermail.com.au/news/queensland/southeast-queenslands-latest-big-cat-sighting/news-story/c3e612d2353d95be62cec144e7ec87a8'>Source</a>" },
        { coords: [-28.0173, 153.1650], info: "<b>Canungra, QLD</b><br>North Queensland sightings. <a href='https://www.news.com.au/technology/science/animals/elusive-big-cat-spotted-by-north-queensland-resident/news-story/e3e8c300f6144c55b65650b9dfbcb7fd'>Source</a>" },
        { coords: [-33.4833, 150.1528], info: "<b>Lithgow, NSW</b><br>Local panther encounters. <a href='https://www.abc.net.au/news/2018-06-13/could-the-lithgow-panther-actually-exist/9116232'>Source</a>" },
        { coords: [-38.6667, 143.5833], info: "<b>Otways, Victoria</b><br>Black cat caught on film. <a href='https://www.abc.net.au/news/2020-06-10/otways-big-black-cat-caught-on-film/12335606'>Source</a>" },
        { coords: [-17.2638, 145.4870], info: "<b>Atherton Tablelands, QLD</b><br>New photographic evidence. <a href='https://www.newsport.com.au/2023/february/new-image-adds-weight-to-douglas-shire-big-cat-theory'>Source</a>" },
        { coords: [-38.3818, 142.4884], info: "<b>Warrnambool, Victoria</b><br>Warburton East sightings. <a href='https://www.heraldsun.com.au/leader/outer-east/another-victorian-big-black-cat-sighting-at-oshannassy-aqueduct-trail-in-warburton-east/news-story/35274483c60ae646172b02a9665a5acd'>Source</a>" },
        { coords: [-31.3333, 138.5833], info: "<b>Flinders Ranges, SA</b><br>Dandenongs encounters. <a href='https://thylacoleo.proboards.com/thread/2826/big-cat-dandenongs-vic'>Source</a>" },
        { coords: [-33.9550, 115.0750], info: "<b>Margaret River, WA</b><br>Giant black cat sighting. <a href='https://www.abc.net.au/news/2022-10-08/giant-black-cat-spotted-near-lancelin/101510332'>Source</a>" },
        { coords: [-32.0500, 151.5000], info: "<b>Barrington Tops, NSW</b><br>Hunter Valley sighting. <a href='https://www.abc.net.au/news/2020-01-20/hunter-valley-big-cat-sighting-nsw-dpi-investigates/11877970'>Source</a>" },
        { coords: [-31.0905, 150.9291], info: "<b>Tamworth, NSW</b><br>Recent big cat reports." },
        { coords: [-38.3435, 145.0340], info: "<b>Mornington Peninsula, Victoria</b><br>Tuerong Freeway sightings. <a href='https://heraldsun.com.au/leader/south-east/latest-big-cat-sighting-on-mornington-peninsula-freeway-at-tuerong-turns-sceptic-into-believer/news-story/bd7a8f1e25f3bd289ba10d06c6c87b92'>Source</a>" }
    ];
    
  
    // Loop through the locations and add markers with popups
    locations.forEach(function(location) {
      var marker = L.marker(location.coords).addTo(map);
      marker.bindPopup(location.info);
    });
  });




  document.addEventListener('DOMContentLoaded', function() {
    var backgroundAudio = document.getElementById('background-audio');
    var sectionAudio = document.getElementById('section-audio');
    var playPauseButton = document.getElementById('play-pause-button');
    var playIcon = document.getElementById('play-icon');
    var pauseIcon = document.getElementById('pause-icon');
    var isPlaying = false;

    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            backgroundAudio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        } else {
            backgroundAudio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }
        isPlaying = !isPlaying;
    });

    backgroundAudio.addEventListener('play', function() {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        isPlaying = true;
    });

    backgroundAudio.addEventListener('pause', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        isPlaying = false;
    });

    // Intersection Observer for section audio
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                sectionAudio.play();
            } else {
                sectionAudio.pause();
            }
        });
    }, { threshold: 0.5 });

    var triggerSection = document.getElementById('trigger-section');
    observer.observe(triggerSection);
});
