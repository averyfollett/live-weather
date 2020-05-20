function changeImage() {
	'use strict';
	var BackgroundImg = new Array(
		'http://hazecam.net/images/large/burlington_right.jpg',
		'http://images.intellicast.com/WxImages/RadarLoop/bml_None_anim.gif',
		'http://hazecam.net/images/large/burlington_right.jpg'
	);
	console.log("hello");
	document.documentElement.style.backgroundImage = 'url("' + BackgroundImg[0] + '")';

	var i = 1;
	setInterval(function() {
		// method to be executed;
		if (i < 3) { 
			document.documentElement.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
			console.log(i);
			i++;
		} else {
			i = 0;
			document.documentElement.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
		}
	}, 20000);

	console.log("image changed");
}