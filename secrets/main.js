//to make the text into the variable

let numbers = 0;

function draw() {
    const element = document.getElementById('numberssssssss');
    element.textContent = numbers;
}

//the keys and mouse
function keyPressed() {
    if (keyCode === LEFT_ARROW || keyCode === BACKSPACE) {

       minus();
    } else if (keyCode === RIGHT_ARROW || keyCode === ENTER) {

        pluss();
    }
}

function mousePressed(){
    pluss();
}
//the - and +
function minus(){
    numbers -= 1;
}

function pluss(){
    numbers += 1;
}
