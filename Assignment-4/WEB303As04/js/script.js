/*
    Assignment #4
    Manjot Singh
*/

$(function () {
    // your code here
    navigator.geolocation.getCurrentPosition(success, () => {
             console.log("Please enable geolocation in order to see your coordinates");
         });
    
         function success(position) {
           let lat1 = position.coords.latitude;
           let lon1 = position.coords.longitude;
          
             console.log("Position object: ", position);
             console.log("latitude: ", position.coords.latitude, ", longitude: ", position.coords.longitude);
           
             const lat2 = localStorage.getItem('latitude');
                const lon2 = localStorage.getItem('longitude');
             
              
             localStorage.setItem('latitude', lat1);
                localStorage.setItem('longitude', lon1);
        
             
            if (lat2 && lon2) {
                const distanceTravelled = calcDistanceBetweenPoints(lat1,lon1, lat2, lon2);
                console.log(' After travel location located.');
                $('div#locationhere').append('<h3>Your Location After travel.</h3>');
                $('div#locationhere').append('<h3> Latitude: ' + parseFloat(lat2) + '&deg</h3>');
                $('div#locationhere').append('<h3> Longitude: ' + parseFloat(lon2) + '&deg</h3>');
                $('div#locationhere').append('<h3>Distance Travelled: ' + Math.round(distanceTravelled / 100) / 10 + ' kilometers</h3>');
            } else {
                console.log('Stored location not located.');
                $('div#locationhere').append('<h3>Welcome and thank you for visiting for your first time.</h3>');
                $("div#locationhere").append(`<h3>Welcome, Your Location is</h3>` );
                $("div#locationhere").append('<h3> Latitude:'+ lat1 + '&deg</h3>' )
                $("div#locationhere").append('<h3> Longitude:'+ lon1 + '&deg</h3>')
            }
        }
       
       


    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});