var windEnabled = true;
var humidityEnabled = true;
var visibilityEnabled = true;
var sunriseEnabled = true;
var sunsetEnabled = true;
var degreeEnabled = true;
var headingEnabled = true;

$(document).ready(function () {

    $('#set-settings-btn').click(function () { setSettings(); window.location = "index.html" });
    getSettings();

});

function setSettings() {

    windEnabled = $("#wind").prop('checked');
    humidityEnabled = $("#humidity").prop('checked');
    visibilityEnabled = $("#visibility").prop('checked');
    sunriseEnabled = $("#sunrise").prop('checked');
    sunsetEnabled = $("#sunset").prop('checked');
    degreeEnabled = $("#degree").prop('checked');
    headingEnabled = $("#heading").prop('checked');

    localStorage.setItem("settings", JSON.stringify(

        {
            wind: windEnabled,
            humidity: humidityEnabled,
            visibility: visibilityEnabled,
            sunrise: sunriseEnabled,
            sunset: sunsetEnabled,
            degree: degreeEnabled,
            heading: headingEnabled
        }

    ));

    window.location = "index.html";

}

function getSettings() {

    var settings = JSON.parse(localStorage.getItem("settings"));

    windEnabled = settings.wind;
    humidityEnabled = settings.humidity;
    visibilityEnabled = settings.visibility;
    sunriseEnabled = settings.sunrise;
    sunsetEnabled = settings.sunset;
    degreeEnabled = settings.degree;
    headingEnabled = settings.heading;

    // have to call refresh to update the element's class
    $("#wind").prop('checked', settings.wind).checkboxradio('refresh');
    $("#humidity").prop('checked', settings.humidity).checkboxradio('refresh');
    $("#visibility").prop('checked', settings.visibility).checkboxradio('refresh');
    $("#sunrise").prop('checked', settings.sunrise).checkboxradio('refresh');
    $("#sunset").prop('checked', settings.sunset).checkboxradio('refresh');
    $("#degree").prop('checked', settings.degree).checkboxradio('refresh');
    $("#heading").prop('checked', settings.heading).checkboxradio('refresh');

    return settings;

}