let xCoordenate = 300;
let yCoordenate = 200;
let diameter = 20;

let xVelocityBall = 6;
let yVelocityBall = 6

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xCoordenate, yCoordenate, diameter);
    xCoordenate += xVelocityBall;
    yCoordenate += yVelocityBall;

    if(xCoordenate > width || xCoordenate < 0){
        xVelocityBall *= -1;
    }

    if(yCoordenate > height || yCoordenate < 0){
        yVelocityBall *= -1;
    }
}
