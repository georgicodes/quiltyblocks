let blockCountWidth = 5;
let blockCountHeight = 5;
let canvasSize = 500;
let noCells = 5;
let cellSize = canvasSize / noCells;
let palette = []
let blockSelection = [""]

// create a canvas
function setup() {
  console.log("setting up canvas with size: " + canvasSize + " and with " + noCells + " cells with cellSize of " + cellSize)
  colorPicker = createColorPicker('#BB2649');
  colorPicker.position(0, 0);
  
  queryColorMind();
  createCanvas(canvasSize, canvasSize);


  noLoop();
}

// draw a grid of quilt blocks using cellSize to control how big/small the blocks are
function draw() {
  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {
      block(x, y, cellSize);
    }
  }
}

// the x and y coordinates we want to draw at
// the size of the cell
function block(x, y, cellSize) {
  console.log("drawing block with x: " + x + " and y: " + y)
  push();
  translate(x, y);   // make everything is relative to (0,0)

  let shape = Math.round(random(1, 10));

  // if (shape == 1) {
  //   blockHST1(cellSize);
  // } else if (shape == 2) {
  //   blockHST2(cellSize);
  // } else if (shape == 3) {
  //   blockHST3(cellSize);
  // } else if (shape == 4) {
  //   blockHST4(cellSize);
  // } else if (shape == 5) {
  //   blockFourPatch(cellSize);
  // } else if (shape == 6) {
  //   blockMarysTriangle(cellSize);
  // } else if (shape == 7) {
  //   blockHSTSquared(cellSize);
  // } else if (shape == 8) {
  //   blockHalfSquareLeft(cellSize);
  // } else if (shape == 9) {
  //   blockHalfSquareRight(cellSize);
  // } else if (shape == 10) {
  //   blockSquareInSquare(cellSize);
  // }

  blockCornerBeamBottom(cellSize)


  // blockCellSquare(cellSize)
  // blockSquareInSquare(cellSize)
  // blockDiamondInSquare(cellSize)
  // blockFourPatch(cellSize)
  // blockHSTSQuared(cellSize)
  // blockPlus(cellSize)
  pop();
}

function blockHST1(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, 0, cellSize, 0, 0, cellSize);
  pop();
}

function blockHST2(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, cellSize, cellSize, 0, cellSize, cellSize);
  pop();
}

function blockHST3(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, 0, cellSize, cellSize, 0, cellSize);
  pop();
}

function blockHST4(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, 0, cellSize, 0, cellSize, cellSize);
  pop();
}

function blockCornerBeamTop(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, 0, 0, cellSize, cellSize/2, cellSize);
  triangle(0, 0, cellSize, 0, cellSize, cellSize/2);
  pop();
}

function blockCornerBeamBottom(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, cellSize/2, 0, cellSize, cellSize, cellSize);
  triangle(cellSize/2, 0, cellSize, 0, cellSize, cellSize);
  pop();
}

function blockFourPatch(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  square(0, 0, cellSize/2);
  square(cellSize/2, cellSize/2, cellSize/2);
  pop();
}

function blockMarysTriangle(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  square(0, cellSize/2, cellSize/2);
  pop();
  blockHST4(cellSize)
}

// TODO
function blockPlus(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  // square(cellSize/3, 0, cellSize/3);
  // rect(0, cellSize/3, cellSize, cellSize/3);
  square(cellSize/3, cellSize/3, cellSize/3);
  pop();
}

function blockHSTSquared(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  square(0, cellSize/2, cellSize/2);
  triangle(0, 0, cellSize/2, 0, cellSize/2, cellSize/2);
  triangle(cellSize/2, cellSize/2, cellSize, cellSize/2, cellSize, cellSize);
  pop();
}

function blockHalfSquareLeft(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  rect(0, 0, cellSize/2, cellSize);
  pop();
}

function blockHalfSquareMiddle(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  rect(0, cellSize/3, cellSize, cellSize/3);
  pop();
}

function blockHalfSquareRight(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  rect(cellSize/2, 0, cellSize/2, cellSize);
  pop();
}

// TODO
function blockHourGlassLeftRight(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  // triangle(0, 0, cellSize/2, cellSize/2, 0, cellSize);
  triangle(0, cellSize, cellSize/2, cellSize/2, cellSize, cellSize);
  pop();
}

// TODO
function blockHourGlassTopBottom(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  // triangle(0, 0, cellSize/2, cellSize/2, 0, cellSize);
  
  triangle(cellSize, cellSize, cellSize/2, cellSize/2, 0, cellSize);
  pop();
}

function blockCellSquare(cellSize) {
  push();
  fill('#FFFFFF')
  square(0, 0, cellSize);
  noStroke();
  pop();
}

function blockSquareInSquare(cellSize) {
  push();
  randomGreenyYelloColorFill();
  square(cellSize/4, cellSize/4, cellSize/2);
  noStroke();
  pop();
}

// TODO
function blockDiamondInSquare(cellSize) {
  push();
  randomGreenyYelloColorFill();
beginShape();
vertex(0, 35);
vertex(35, 0);
vertex(0, -35);
vertex(-35, 0);
endShape();
// noStroke();
pop();
}

function randomColorFill() {
  fill(random(0, 255), random(0, 255), random(0, 255));
}

function randomGreenyYelloColorFill() {
  const colors = ["#0C335E", "#0D7818", "#6FB01D", "#B5BF1D", "#EDEF0C"];

  fill(colors[Math.round(random(0, 4))]);
}

function fillWhite() {
  fill('#FFFFFF')
}

function queryColorMind() {
  var url = "http://colormind.io/api/";
var data = {
	model : "default",
	// input : [[44,43,44],[90,83,82],"N","N","N"]
}

var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		palette = JSON.parse(http.responseText).result;
    console.log(palette)
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));
}