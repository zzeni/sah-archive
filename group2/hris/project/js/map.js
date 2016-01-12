//http://www.gps-coordinates.net/

    function init_map() {
        var myOptions = {
            zoom: 15,
            center: new google.maps.LatLng(43.2760555204678, 26.956346512888558),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map'), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(43.2760555204678, 26.956346512888558)
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
    google.maps.event.addDomListener(window, 'load', init_map);