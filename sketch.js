var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;

var xspeed = 9;
var xpos= 0;

function preload() {
  img1 = loadImage("sky.jpg");
  img2 = loadImage("airport4.jpg");
  img3 = loadImage("planeplane.png");
  img4 = loadImage("bird.png");
  img5 = loadImage("ufo.png");
  img6 = loadImage("godzilla.png");
  img7 = loadImage("king.png");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {

  background(220, 5, 50);
  image(img1, 0, 0);
  image(img2, 0, 250);
  image(img6, 0, 189);
  image(img3, xpos, 100);
  image(img7, 340, 200);
  image(img5, mouseX, mouseY);
  image(img4, xpos, 10);

  //fill(9, 8, 255, 25)
  //ellipse(xpos, 50, 50, 50);
  //ellipse(xpos, 100, 50, 50);


  if (xpos > width) {
    xspeed = -4;
}
  if (xpos < 0) {
    xspeed = 4;
  }
  xpos += xspeed
}
