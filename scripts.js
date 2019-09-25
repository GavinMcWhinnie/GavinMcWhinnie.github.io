background = document.getElementsByClassName('background')[0];

nav_fixed = document.getElementsByClassName('nav_fixed')[0];
nav = document.getElementsByClassName('nav')[0];

click_to_scroll = document.getElementsByClassName('click_to_scroll')[0];

nav_offset = nav.offsetTop;

window.onresize = function () {
	window.scrollTo(0,0);
	hide_fixed_nav();
	nav_offset = nav.offsetTop;
}

var show_fixed_nav = function () {
	nav_fixed.style.display = 'block';
}

var hide_fixed_nav = function () {
	nav_fixed.style.display = 'none';
}

window.onscroll = function () {
	var scroll = window.scrollY;
	var opacity = 0.6-scroll/1500
	if (opacity >= 0) {
		background.style.opacity = opacity;
	} else {
		background.style.opacity = 0;
	}
	if (scroll >= nav_offset) {
		show_fixed_nav();
	} else {
		hide_fixed_nav();
	}
}

var scroll_interval;
var time;

click_to_scroll.onclick = function () {
	time = 0;
	scroll_interval = setInterval(scroll_a_bit, 10, window.scrollY, nav_offset);
}

var timing_function = function (x) {
	return (x-x**2)/(42*(2*x**2-2*x+1)**2);
}

scroll_a_bit = function (start, destination) {

	var distance = destination - start;
	window.scrollBy(0,timing_function(time/100)*distance);
	if (time >= 100) {
		clearInterval(scroll_interval);
	}
	time += 1
}