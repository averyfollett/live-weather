// written by Avery Follett
// last updated May 20, 2020

jQuery(document).ready(function($) {
	'use strict';
	
	var settings = 
	{
		"async": true,
		"crossDomain": true,
		"url": "https://api.weatherbit.io/v2.0/current?city=Burlington,VT&units=I&key=804034dd9b7242569ba2fe68ead009a1",
		"method": "GET"
	}

	$.ajax(settings).done(function (parsed_json) {
		var temp_f = parsed_json['data'][0]['temp'];
		var feelslike_f = parsed_json['data'][0]['app_temp'];
		if (temp_f == feelslike_f){
			document.getElementById('currentTemp').innerHTML = temp_f + "F";
		} else {
			document.getElementById('currentTemp').innerHTML = temp_f + "F (" + feelslike_f + "F)";
		}
		var humidity = parsed_json['data'][0]['rh'];
		document.getElementById('humidity').innerHTML = humidity + "% humidity";
		var wind_mph = parsed_json['data'][0]['wind_spd'];
		var wind_dir = parsed_json['data'][0]['wind_cdir'];
		document.getElementById('wind_mph').innerHTML = "Wind " + wind_mph + " mph " + wind_dir;
	});
});