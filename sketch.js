var x1, x2, x3, x4, y1, y2, y3, y4;
var step = 0;
var offset = 15;
var numLines = 50;

function setup () {
  createCanvas(600, 400);
  x1 = 0;
  y1 = 0;

  y2 = 0;

  y3 = height;
  x4 = width;
  y4 = height;
  noFill();
  stroke(0, 100);
}

function draw () {
  background(250);
  for (var i = 0; i < height + offset; i += offset){
  x2 = 0 + step;
  x3 = 0 + step;
  //y4 = random(height/2 - 50, height/2 + 50);
  //y4 = random(0, height);
  //bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  //bezier(x1, y1 - offset, x2, y2, x3, y3, x4, y4);
  //bezier(x1, y1 + offset, x2, y2, x3, y3, x4, y4);

  bezier(x1, i, x2, y2, x3, y3, x4, y4 - i);
  
  //line(x1, y1, x2, y2);
  //ellipse(x2, y2, 10, 10);
  //line(x4, y4, x3, y3);
  //ellipse(x3, y3, 10, 10);
  }
  step += 10;
  if (step > width + 300){
    step = 0;
  }
}

function mouseIsPressed () {
  noLoop();
}
