function init_map() {
        var var_location = new google.maps.LatLng(45.820302, 15.160845); /* variable in the function holds the location on the map (latitude and longitude) */
 
        var var_mapoptions = {
          center: var_location,     /* center of the map is set to the latitude and longitude we inserted earlier */
          zoom: 14                  /* The map will be displayed more globally (with a low zoom value) or more specifically (with a higher zoom value) */
        };
 
        var var_marker = new google.maps.Marker({   /* a marker that will show a precise location on the map */
            position: var_location,                 /* marker is positioned by using the variable name ‘var_location’ which holds our latitude and longitude values. */
            map: var_map,       
            title:"Novo mesto"});                       /* we give the marker a title which will be displayed when a user hovers over the marker. */
 
        var var_map = new google.maps.Map(document.getElementById("map-container"), /* We then create a variable that will hold our new map. This new map is with the ID ‘map-container’.*/
            var_mapoptions);
 
        var_marker.setMap(var_map);     /* we load the map. To make sure that the map is loaded after the browser window is open we let the browser listen for this event. */  
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);