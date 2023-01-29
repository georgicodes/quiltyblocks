let canvasSize = 500;
let noCells = 5;
let cellSize = canvasSize / noCells;

// create a canvas
function setup() {
  console.log("setting up canvas with size: " + canvasSize + " and with " + noCells + " cells with cellSize of " + cellSize)

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

  let shape = Math.round(random(1, 4));

  if (shape == 1) {
    blockHST1(cellSize);
  } else if (shape == 2) {
    blockHST2(cellSize);
  } else if (shape == 3) {
    blockHST3(cellSize);
  } else if (shape == 4) {
    blockHST4(cellSize);
  }

  pop();
}

function blockHST1(cellSize) {
  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  triangle(0, 0, cellSize, 0, 0, cellSize);
  pop();
}

function blockHST2(cellSize) {
  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  triangle(0, cellSize, cellSize, 0, cellSize, cellSize);
  pop();
}

function blockHST3(cellSize) {
  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  triangle(0, 0, cellSize, cellSize, 0, cellSize);
  pop();
}

function blockHST4(cellSize) {
  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  triangle(0, 0, cellSize, 0, cellSize, cellSize);
  pop();
}