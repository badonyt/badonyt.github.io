window.addEventListener(
	"keydown",
	function (e) {
		if (
			[
				"Space",
				"ArrowUp",
				"ArrowDown",
				"ArrowLeft",
				"ArrowRight",
			].indexOf(e.code) > -1
		) {
			e.preventDefault();
		}
	},
	false
);

//pong clone
//mouse to control both paddles

var paddleA, paddleB, ball, wallTop, wallBottom;
var MAX_SPEED = 10;
let pointsA = 0;
let pointsB = 0;
let restart;
let hardmode = false;

function setup() {
	createCanvas(800, 400);
	//frameRate(6);

	paddleA = createSprite(30, height / 2, 10, 100);
	paddleA.immovable = true;

	paddleB = createSprite(width - 28, height / 2, 10, 100);
	paddleB.immovable = true;

	wallTop = createSprite(width / 2, -30 / 2, width, 30);
	wallTop.immovable = true;

	wallBottom = createSprite(width / 2, height + 30 / 2, width, 30);
	wallBottom.immovable = true;

	ball = createSprite(width / 2, height / 2, 10, 10);
	ball.maxSpeed = MAX_SPEED;

	paddleA.shapeColor = color(255, 69, 0);
	paddleB.shapeColor = color(0, 128, 0);
	ball.shapeColor = color(255, 255, 255);

	ball.setSpeed(MAX_SPEED, -180);
}

function draw() {
	background(145);

	textSize(24);
	text(pointsB, 320, 30);

	textSize(24);
	text(pointsA, 470, 30);

	textSize(24);
	text("Points", 370, 30);

	paddleA.position.y = constrain(
		paddleA.position.y,
		paddleA.height / 2,
		height - paddleA.height / 2
	);
	paddleB.position.y = constrain(
		paddleB.position.y,
		paddleA.height / 2,
		height - paddleA.height / 2
	);

	ball.bounce(wallTop);
	ball.bounce(wallBottom);

	if (keyIsDown(83)) {
		paddleA.position.y += 5;
	} else if (keyIsDown(87)) {
		paddleA.position.y -= 5;
	}

	if (keyIsDown(DOWN_ARROW)) {
		paddleB.position.y += 5;
	} else if (keyIsDown(UP_ARROW)) {
		paddleB.position.y -= 5;
	}

	var swing;
	if (ball.bounce(paddleA)) {
		swing = (ball.position.y - paddleA.position.y) / 3;
		ball.setSpeed(MAX_SPEED, ball.getDirection() + swing);
	}

	if (ball.bounce(paddleB)) {
		swing = (ball.position.y - paddleB.position.y) / 3;
		ball.setSpeed(MAX_SPEED, ball.getDirection() - swing);
	}

	if (ball.position.x < 0) {
		pointsA += 1;
		ball.position.x = width / 2;
		ball.position.y = height / 2;
		ball.setSpeed(0, 0);
		restart = true;
	}

	if (ball.position.x > width) {
		pointsB += 1;
		ball.position.x = width / 2;
		ball.position.y = height / 2;
		ball.setSpeed(0, 180);
		restart = true;
	}

	if (restart == true) {
		textSize(32);
		text("Click enter to Respawn!", 250, 200);
	}

	drawSprites();
}
function keyPressed() {
	if (keyCode == ENTER) {
		if (restart == true) {
			if (hardmode == true) {
				ball.setSpeed(MAX_SPEED, random(0, 180));
			} else {
				ball.setSpeed(MAX_SPEED, 180);
			}

			restart = false;
		}
	}
	if (keyCode == 72) {
		if (hardmode == true) {
			hardmode = false;
		} else {
			hardmode = true;
		}
	}
}
