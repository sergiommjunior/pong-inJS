//Ball Variables
let xCoordenate = 300;
let yCoordenate = 200;
let diameter = 20;
let radius = diameter / 2;

//Velocity Variables
let xVelocityBall = 7;
let yVelocityBall = 7;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    showBall();
    movimentBall();
    verifiedColision();    
}

function showBall(){
    circle(xCoordenate, yCoordenate, diameter);
}

function movimentBall(){
    xCoordenate += xVelocityBall;
    yCoordenate += yVelocityBall;
}

function verifiedColision(){
    if(xCoordenate + radius > width || xCoordenate - radius < 0){
        xVelocityBall *= -1;
    }

    if(yCoordenate + radius > height || yCoordenate - radius < 0){
        yVelocityBall *= -1;
    }
}
