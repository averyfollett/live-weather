// written by Avery Follett
// last updated July 26, 2020

jQuery(document).ready(function($) {
	'use strict';
	
	var settings = 
	{
		"async": true,
		"crossDomain": true,
		"url": "https://api.weatherbit.io/v2.0/current?city=Colchester,VT&units=I&key=",
		"method": "GET"
	}

	$.ajax(settings).done(function (parsed_json) {
		var temp_f = parsed_json['data'][0]['temp'];
		var feelslike_f = parsed_json['data'][0]['app_temp'];
		if (temp_f == feelslike_f){
			document.getElementById('currentTemp').innerHTML = temp_f + "&#176;F";
		} else {
			document.getElementById('currentTemp').innerHTML = temp_f + "&#176;F (" + feelslike_f + "&#176;F)";
		}
		var humidity = parsed_json['data'][0]['rh'];
		document.getElementById('humidity').innerHTML = humidity + "% humidity";
		var wind_mph = parsed_json['data'][0]['wind_spd'];
		var wind_dir = parsed_json['data'][0]['wind_cdir'];
		document.getElementById('wind_mph').innerHTML = "Wind " + wind_mph + " mph " + wind_dir;
	});
});