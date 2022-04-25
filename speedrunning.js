//location = "//example.com";
console.log("I was testing something and now just forget it ");
var timeleft = 100;
var downloadTimer = setInterval(function () {
	if (timeleft <= 0) {
		clearInterval(downloadTimer);
	}
	// document.getElementById("progressBar").value = 10 - timeleft;
	timeleft -= 1;
	console.log(timeleft);
	if (timeleft == -1) {
		location = "https://therickroll.com";
	} else if (timeleft < 10) {
		document.getElementById("timer").innerHTML =
			"Before you get rickrolled i just wanna say you are getting rick rolled";
		document.getElementById("a").innerHTML = "Time left: " + (timeleft + 1);
	}
}, 1000);
