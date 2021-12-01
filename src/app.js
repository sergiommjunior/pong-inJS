//Ball Variables
let xBall = 300;
let yBall = 200;
let diameter = 20;
let radius = diameter / 2;

//Velocity Variables
let xVelocityBall = 7;
let yVelocityBall = 7;

//Racket Variables
let xRacket = 5;
let yRacket = 150;
let widthRacket = 10;
let heightRacket = 90;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    showBall();
    movimentBall();
    verifiedColision();
    showRacket();   
}

function showBall(){
    circle(xBall, yBall, diameter);
}

function movimentBall(){
    xBall += xVelocityBall;
    yBall += yVelocityBall;
}

function verifiedColision(){
    if(xBall + radius > width || xBall - radius < 0){
        xVelocityBall *= -1;
    }

    if(yBall + radius > height || yBall - radius < 0){
        yVelocityBall *= -1;
    }
}

function showRacket(){
    rect(xRacket, yRacket, widthRacket, heightRacket);
}
