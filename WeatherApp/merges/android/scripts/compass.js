function getCompassDirection() {

    var options = {
        frequency: 3000
    };

    navigator.compass.watchHeading(onSuccess, onError, options);
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
    
    function onSuccess(heading) {
        $("#degree").text(heading.magneticHeading);
        $("#heading").text(degToCompass(heading.magneticHeading));
    }

    function onError(error) {
        $("#degree").text(error.code);
    }

    // https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words#7490772
    function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
}