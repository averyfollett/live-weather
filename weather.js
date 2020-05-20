// written by Avery Follett
// last updated November 11, 2019

jQuery(document).ready(function($) {
	'use strict';
	
	var settings = 
	{
		"async": true,
		"crossDomain": true,
		"url": "https://dark-sky.p.rapidapi.com/44.478740,-73.189940?lang=en&units=auto",
		"method": "GET",
		"headers": 
		{
			"x-rapidapi-host": "dark-sky.p.rapidapi.com",
			"x-rapidapi-key": "f08781afa0msh7ab40c635b0118cp1a22ebjsn5e9eba6b8c9b"
		}
	}

	$.ajax(settings).done(function (parsed_json) {
		//var location = parsed_json['name'];
		var temp_f = parsed_json['currently']['temperature'].toFixed(1);
		var feelslike_f = parsed_json['currently']['apparentTemperature'].toFixed(0);
		if (temp_f == feelslike_f){
			document.getElementById('currentTemp').innerHTML = temp_f + "F";
		} else {
			document.getElementById('currentTemp').innerHTML = temp_f + "F (" + feelslike_f + "F)";
		}
		var wind_mph = parsed_json['currently']['windSpeed'];
		var wind_deg = parsed_json['currently']['windBearing'];
		var wind_dir = "NULL";
		if (wind_deg >= 0.0 && wind_deg < 30.0)
			wind_dir = "N";
		else if (wind_deg >= 30.0 && wind_deg < 60.0)
			wind_dir = "NE";
		else if (wind_deg >= 60.0 && wind_deg < 120.0)
			wind_dir = "E";
		else if (wind_deg >= 120.0 && wind_deg < 150.0)
			wind_dir = "SE";
		else if (wind_deg >= 150.0 && wind_deg < 210.0)
			wind_dir = "S";
		else if (wind_deg >= 210.0 && wind_deg < 240.0)
			wind_dir = "SW";
		else if (wind_deg >= 240.0 && wind_deg < 300.0)
			wind_dir = "W";
		else if (wind_deg >= 300.0 && wind_deg < 330.0)
			wind_dir = "NW";
		else if (wind_deg >= 330.0 && wind_deg <= 360.0)
			wind_dir = "N";
		document.getElementById('wind_mph').innerHTML = "Wind " + wind_mph + " mph " + wind_dir;
		
		//Originally in forecast.js
		var high_low = "<b>High: </b>" + Math.round(parsed_json['daily']['data'][0]['temperatureHigh']) + "F <br>" + 
			"<b>Low: </b>" + Math.round(parsed_json['daily']['data'][0]['temperatureLow']) + "F";
		var forecast_today = "<b>Today</b>: " + parsed_json['daily']['data'][0]['summary'];
		var forecast_tomorrow = "<b>Tomorrow</b>: " + parsed_json['daily']['data'][1]['summary'] + " High " + Math.round(parsed_json['daily']['data'][1]['temperatureHigh']) + ".";
		var state = "high_low";
		document.getElementById('forecast').innerHTML = high_low;
		setInterval(function() {
			// method to be executed;
			if (state === "high_low") {
				document.getElementById('forecast').innerHTML = high_low;
				state = "forecast_today";
			} else if (state === "forecast_today") {
				document.getElementById('forecast').innerHTML = forecast_today;
				state = "forecast_tomorrow";
			} else if (state === "forecast_tomorrow") {
				document.getElementById('forecast').innerHTML = forecast_tomorrow;
				state = "high_low";
			}
		}, 10000);
	});
});