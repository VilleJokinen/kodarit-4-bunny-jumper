let bunnyList = [];
let paddleY;
let paddleWidth;
let paddleHeight;

function setup() {
    createCanvas(windowWidth, windowWidth / 3);
    createBunnies();
    paddleY = windowWidth / 3 -80;
    paddleWidth = windowWidth / 17;
    paddleHeight = windowWidth / 40;
}

function draw() {
    background('black');
    image(taustakuva, 0, 0, windowWidth, windowWidth / 3);
    create_paddle();

    bunnyList.forEach(function(bunnyObject, index){
        bunnyObject.move();

        if (bunnyObject.x > windowWidth) {
            bunnyList.splice(index, 1)
        };

        if(bunnyObject.y > windowWidth / 3) {
            bunnyList.splice(index, 1)
        };
    } );
}

function preload() {
    taustakuva = loadImage('landscape.png');
    hahmo = loadImage('bunny.png');
}

function createBunnies() {
    bunnyObject = new Bunny();
    bunnyList.unshift(bunnyObject);
    bunnyTimer = setTimeout(createBunnies, 2000)
}

class Bunny {
    constructor() {
        this.y = 0;
        this.x = 100;
        this.width = 50;
        this.height = 50;
        this.Xspeed = random(1, 4);
        this.Yspeed = random(-2, -4);
    }
    move(){
        this.x += this.Xspeed;
        this.Yspeed += 0.05;

        if(this.y + this.height > paddleY 
        && this.y < paddleY + paddleHeight 
        && this.x + this.width > mouseX 
        && this.x < mouseX + paddleWidth) {
            this.Yspeed = -abs(this.Yspeed);
        }


        this.y += this.Yspeed;
        image(hahmo, this.x, this.y, this.width, this.height);
    }
}

function create_paddle(){
    fill("ffce99");
    rect(mouseX, paddleY, windowWidth/20, windowWidth/40, 20, 20, 0, 0);
}