// written by Avery Follett
// last updated July 26, 2020

function changeImage() {
	'use strict';
	var BackgroundImg = new Array(
		'http://images.intellicast.com/WxImages/RadarLoop/bml_None_anim.gif'
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