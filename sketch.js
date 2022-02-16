let stage = 0;

function setup() {
  createCanvas(800, 1422);
}

function preload() {
  i1 = loadImage("image/i 1.jpg");
  i2 = loadImage("image/i 2.jpg");
}

function draw() {
  background(220);
  switch (stage) {
    case 0:
      image(i2, 0, 0, width, height);
      rect(60,550,580,120);
      rect(60,760,580,120);
      if (mouseIsPressed) {
        stage = 1;
      }
      break;
    case 1:
      image(i2, 0, 0, width, height);
       if (
            mouseIsPressed &&
            mouseX >= 60 &&
            mouseX <= 640 &&
            mouseY >= 550 &&
            mouseY <= 670
          ) {
         stage = 3
       }
      break;
    default:
      break;
  }
}
