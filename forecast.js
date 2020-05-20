// written by Avery Follett
// last updated May 20, 2020

jQuery(document).ready(function($) {
	'use strict';
	
	var settings = 
	{
		"async": true,
		"crossDomain": true,
		"url": "https://api.weatherbit.io/v2.0/forecast/daily?city=Burlington,VT&units=I&days=2&key=804034dd9b7242569ba2fe68ead009a1",
		"method": "GET"
	}

	$.ajax(settings).done(function (parsed_json) {
		var high_low = "<b>High: </b>" + Math.round(parsed_json['data'][0]['high_temp']) + "F <br>" + 
			"<b>Low: </b>" + Math.round(parsed_json['data'][0]['low_temp']) + "F";
		var forecast_today = "<b>Today</b>: " + parsed_json['data'][0]['weather']['description'];
		var forecast_tomorrow = "<b>Tomorrow</b>: " + parsed_json['data'][1]['weather']['description'] + ". High " + Math.round(parsed_json['data'][1]['high_temp']) + ".";
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