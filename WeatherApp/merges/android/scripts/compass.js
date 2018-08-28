function getCompassDirection() {

    // https://blog.phonegap.com/migrating-from-the-cordova-device-orientation-plugin-8442b869e6cc
    var options = {
        frequency: 3000
    };

    navigator.compass.watchHeading(onSuccess, onError, options);
    
    function onSuccess(heading) {
        var degree = heading.magneticHeading;
        $("#degree").text(degree);
        $("#heading").text(degToCompass(degree));
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