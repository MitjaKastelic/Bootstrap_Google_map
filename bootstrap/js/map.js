function init_map() {
        var var_location = new google.maps.LatLng(45.820302, 15.160845); /* variable in the function holds the location on the map (latitude and longitude) */
 
        var var_mapoptions = {
          center: var_location,     /* center of the map is set to the latitude and longitude we inserted earlier */
          zoom: 14                  /* The map will be displayed more globally (with a low zoom value) or more specifically (with a higher zoom value) */
        };
    
        var var_pin = 'pin-green-2.png';    /*prikaz ikonce na zemljevidu  */
 
        var var_marker = new google.maps.Marker({   /* a marker that will show a precise location on the map */
            position: var_location,                 /* marker is positioned by using the variable name ‘var_location’ which holds our latitude and longitude values. */
            map: var_map,  
            icon: var_pin,
            title:"Moj naslov"});                       /* we give the marker a title which will be displayed when a user hovers over the marker. */
 
        var var_map = new google.maps.Map(document.getElementById("map-container"), /* We then create a variable that will hold our new map. This new map is with the ID ‘map-container’.*/
            var_mapoptions);
 
        var_marker.setMap(var_map);     /* we load the map. To make sure that the map is loaded after the browser window is open we let the browser listen for this event. */  
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);



/* LINE 7: You will have noticed (line 4) that we can also set the type of map. You can choose the options: ROADMAP (normal), SATELLITE (photographic map), HYBRID (photographic map + roads and city names) and TERRAIN (map with mountains, rivers, etc.). */

/* The MapType control lets the user toggle between map types (such as ROADMAP and SATELLITE). This control appears by default in the top right corner of the map.
The Pan control displays buttons for panning the map. This control appears by default in the top left corner of the map on non-touch devices. The Pan control also allows you to rotate 45° imagery, if available.
The Rotate control contains a small circular icon which allows you to rotate maps containing oblique imagery. This control appears by default in the top left corner of the map. (See 45° Imagery for more information.)
The Street View control contains a Pegman icon which can be dragged onto the map to enable Street View. This control appears by default in the top left corner of the map. */