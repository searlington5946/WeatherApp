var OpenWeatherAppKey = "5b613432c1071e09bec04b116311366d";

function getWeatherWithZipCode() {
    var zipcode = $('#zip-code-input').val();

    if (zipcode == 72015) {
        alert("Go Panthers!");
        $(".ui-bar-inherit.ui-header.header").css("background-color", "#520000");
        $("#app-title").text("Panther Weather");
    }

    var queryString =
        'http://api.openweathermap.org/data/2.5/weather?zip='
        + zipcode + ',us&appid=' + OpenWeatherAppKey + '&units=imperial';
    $.getJSON(queryString, function (results) {
        showWeatherData(results);
    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });
    return false;
}

function getWeatherWithGeoLocation() {
    //Call the Cordova Geolocation API
    navigator.geolocation.getCurrentPosition(onGetLocationSuccess, onGetLocationError,
        { enableHighAccuracy: true });
    $('#error-msg').show();
    $('#error-msg').text('Determining your current location ...');
    $('#get-weather-btn').prop('disabled', true);
}

function onGetLocationSuccess(position) {
    //Retrieve the location information from the position object
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var queryString = 'http://api.openweathermap.org/data/2.5/weather?lat='
        + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';

    $('#get-weather-btn').prop('disabled', false);

    $.getJSON(queryString, function (results) {
        showWeatherData(results);
    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });
}

function onGetLocationError(error) {
    $('#error-msg').text('Error getting location');
    $('#get-weather-btn').prop('disabled', false);
}

function configureWeatherData() {

    settings = JSON.parse(localStorage.getItem("settings"));

    if (!settings.wind) { $("#wind-data").hide(); } else { $("#wind-data").show(); }
    if (!settings.visibility) { $("#visibility-data").hide(); } else { $("#visibility-data").show(); }
    if (!settings.humidity) { $("#humidity-data").hide(); } else { $("#humidity-data").show(); }
    if (!settings.sunrise) { $("#sunrise-data").hide(); } else { $("#sunrise-data").show(); }
    if (!settings.sunset) { $("#sunset-data").hide(); } else { $("#sunset-data").show(); }
    if (!settings.degree) { $("#degree-data").hide(); } else { $("#degree-data").show(); }
    if (!settings.heading) { $("#heading-data").hide(); } else { $("#heading-data").show(); }

}

function showWeatherData(results) {

    if (results.weather.length) {
        $('#error-msg').hide();
        $('#weather-data').show();

        $('#title').text(results.name);
        $('#temperature').text(results.main.temp);
        $('#wind').text(results.wind.speed);
        $('#humidity').text(results.main.humidity);
        $('#visibility').text(results.weather[0].main);

        var sunriseDate = new Date(results.sys.sunrise * 1000);
        $('#sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.sys.sunset * 1000);
        $('#sunset').text(sunsetDate.toLocaleTimeString());

        configureWeatherData();
        getCompassDirection();

    } else {
        $('#weather-data').hide();
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. ");
    }
}