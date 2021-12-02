//Ball Variables
let xBall = 300;
let yBall = 200;
let diameter = 20;
let radius = diameter / 2;

//Velocity Variables
let xVelocityBall = 4;
let yVelocityBall = 4;

//Racket Variables
let xRacket = 5;
let yRacket = 150;
let widthRacket = 10;
let heightRacket = 90;

//Opponent's Racket Variables
let xRacketOpponent = 585;
let yRacketOpponent = 150;
let yVelocityOpponent;

let colision = false;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    showBall();
    movimentBall();
    verifiedColision();
    showRacket(xRacket, yRacket);
    showRacket(xRacketOpponent, yRacketOpponent); 
    movimentRacket();
    movimentRacketOpponent();
    //verifiedColisionRacket();
    colisionMyRacketLibrary();  
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

function showRacket(x, y){
    rect(x, y, widthRacket, heightRacket);
}

function movimentRacket(){
    if(keyIsDown(UP_ARROW)){
        yRacket -= 5;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRacket += 5;
    }
}

function verifiedColisionRacket(){
    if(xBall - radius < xRacket + widthRacket && yBall - radius < yRacket + heightRacket && yBall + radius > yRacket){
        xVelocityBall *= -1;
    }
}

function colisionMyRacketLibrary(){ 
    colision = collideRectCircle(xRacket,yRacket,widthRacket,heightRacket,xBall,yBall,radius);
    if (colision){
        xVelocityBall *= -1;
    }
}

function movimentRacketOpponent(){
    yVelocityOpponent = yBall - yRacketOpponent - widthRacket / 2 - 30;
    yRacketOpponent += yVelocityOpponent
}