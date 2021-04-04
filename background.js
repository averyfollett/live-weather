// written by Avery Follett
// last updated April 4, 2021

function changeImage() {
	'use strict';
	var BackgroundImg = new Array(
		'https://s.w-x.co/staticmaps/wu/wxtype/county_loc/bml/animate.png'
	);
	document.documentElement.style.backgroundImage = 'url("' + BackgroundImg[0] + '")';

	var x = document.getElementById('video-background');

	var i = 1;
	setInterval(function() {
		// method to be executed;
		if (i < 2) { 
			i++;
			x.style.display = "none";
		} else {
			i = 0;
			x.style.display = "block";
		}
	}, 30000);
}