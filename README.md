# WeatherApp

This is a completed solution of the WeatherApp assignment for CIS2543 with some enhancements.  It's based on the tutorial found [here](https://docs.microsoft.com/en-us/visualstudio/cross-platform/tools-for-cordova/first-steps/build-your-first-app).

## Requirements

* Visual Studio Community 2017 Version 15.8.1
* jQuery 1.8.0
* jQuery Mobile 1.4.5

## Improvements

* Added this README.md
* Added a settings page (see: [settings.js](https://github.com/searlington5946/WeatherApp/blob/master/WeatherApp/www/scripts/settings.js))
* Makes use of [multi-page template structure](http://demos.jquerymobile.com/1.4.5/pages/) and page transitions!
* Added degree and heading information to the weather data list for Android phones (see: [compass.js](https://github.com/searlington5946/WeatherApp/blob/master/WeatherApp/merges/android/scripts/compass.js))
* Created favicon.ico to suppress warnings when debugging in browser
* Added a fun easter egg (read the source to find it!)

## Known Bugs

* Domain access is currently set to * in config.xml due to a bug

## TODO

* App icon