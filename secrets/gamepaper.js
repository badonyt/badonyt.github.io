let rock;
let paper;
let scissors;
let decission;
let won;
let tieinarow = 0;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// function setup() {
// 	rock = createButton("rock");
// 	rock.position(0, 0);
// 	rock.mousePressed(rockk);

// 	paper = createButton("paper");
// 	paper.position(93, 0);
// 	paper.mousePressed(paperr);

// 	scissors = createButton("scissors");
// 	scissors.position(36, 0);
// 	scissors.mousePressed(scissorss);
// }

// function rockk() {
// 	console.log("rock");
// 	decission = 1;
// 	correctionn();
// }

// function scissorss() {
// 	console.log("scissors");
// 	decission = 2;
// 	correctionn();
// }

// function paperr() {
// 	console.log("paper");
// 	decission = 3;
// 	correctionn();
// }

function testt(objectt) {
	if (objectt == 3) {
		console.log("paper");
		decission = 3;
		correctionn();
	} else if (objectt == 1) {
		console.log("rock");
		decission = 1;
		correctionn();
	} else if (objectt == 2) {
		console.log("scissors");
		decission = 2;
		correctionn();
	}
}
//rock = 1
//scissors = 2
//paper = 3
function correctionn() {
	cppp = getRandomInt(1, 3);
	console.log(cppp);
	if (decission == 1 && cppp == 2) {
		console.log("player won");
		won = 0;
		tieinarow = 0;
	} else if (cppp == 1 && decission == 2) {
		console.log("computer won");
		won = 1;
		tieinarow = 0;
	}

	if (cppp == 2 && decission == 3) {
		console.log("computer won");
		won = 1;
		tieinarow = 0;
	} else if (decission == 2 && cppp == 3) {
		console.log("player won");
		won = 0;
		tieinarow = 0;
	}

	if (decission == 1 && cppp == 3) {
		console.log("computer won");
		won = 1;
		tieinarow = 0;
	} else if (decission == 3 && cppp == 1) {
		console.log("player won");
		won = 0;
		tieinarow = 0;
	}

	if (decission == cppp) {
		console.log("tie");
		won = "tie";
		tieinarow += 1;
	}
	drawthis();
}
function drawthis() {
	if (won == 1) {
		document.getElementById("good").innerHTML = "Computer Won";
	} else if (won == 0) {
		document.getElementById("good").innerHTML = "Player Won";
	} else if (tieinarow > 2) {
		console.log("secret");
		if (navigator.userAgent.indexOf("Firefox") != -1) {
			window.location.replace("https://therickroll.com/");
		} else {
			location = "/rickroll/rickroll.html";
		}
	} else if (won == "tie") {
		document.getElementById("good").innerHTML = "Tie";
	}
}
