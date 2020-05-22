window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
    window.setTimeout(a, 1E3 / 60)
});

function addEvent(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent('on'+b,c);}

function goTo(e){

	function doScroll(){

		var progress = (new Date - start) / duration;

		if (progress > 1) progress = 1;

		var delta = (progress < .5) ? Math.pow(2 * progress, 3) / 2 : (2 - Math.pow(2 * (1 - progress), 3)) / 2,
			result = (targetTop - from) * delta + from;

		window.scrollTo(0, result)

		if (progress === 1) return;

		window.requestAnimationFrame(doScroll);

	}

	(e.preventDefault) ? e.preventDefault() : (e.returnValue = false);

	var target = (e.target || e.srcElement).hash.substring(1),
		targetTop = document.getElementById(target).offsetTop,
		from = window.pageYOffset || document.documentElement.scrollTop,
		start = new Date;

	doScroll();

}


var link = document.querySelectorAll("span a"),
	duration = 1000,
	i = 0,
	l = link.length;

for(; i<l; i++) addEvent(link[i], "click", goTo, false);
