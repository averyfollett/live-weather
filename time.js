// written by Avery Follett
// last updated May 20, 2020
function startTime() {
	'use strict';
    var today = new Date();
    var h = today.getHours();
	var ampm = h >= 12 ? 'pm' : 'am';
	h = h % 12; // 12 hour version instead of 24
  	h = h ? h : 12; // the hour '0' should be '12'
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m + " " + ampm;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
	'use strict';
    if (i < 10) {
		i = "0" + i;
	}  // add zero in front of numbers < 10
    return i;
}