function setup() {
    createCanvas(windowWidth, windowWidth / 3);
}

function draw() {
    background('black');
    image(taustakuva, 0, 0, windowWidth, windowWidth / 3);
}

function preload() {
    taustakuva = loadImage('landscape.png');
    hahmo = loadImage('bunny.png');
}