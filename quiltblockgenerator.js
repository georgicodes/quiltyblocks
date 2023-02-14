let blockCountWidth = 5;
let blockCountHeight = 5;
let canvasSize = 500;
let noCells = 5;
let cellSize = canvasSize / noCells;
let palette = ["#f7f6ec", "#cac3bd", "#03a3ad", "#fd8088", "#feb99f"]
let blockSelection = []
let allowedBlockTypes = [
  BlockNames.HST, BlockNames.FOUR_PATCH, BlockNames.MARYS_TRIANGLE, BlockNames.RECTANGLES, BlockNames.HST_SQUARED,
  BlockNames.BIRDS_IN_THE_AIR, BlockNames.QST, BlockNames.CORNER_BEAM, BlockNames.FLYING_GEESE
]
let selectedBlockTypes = new Map();

// create a canvas
function setup() {
  console.log("setting up canvas with size: " + canvasSize + " and with " + noCells + " cells with cellSize of " + cellSize)
  // colorPicker = createColorPicker('#BB2649');
  // colorPicker.position(0, 0);

  // queryColorMind();
  let canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('qb_container');

  if (document.body.addEventListener) {
    document.body.addEventListener('click', blockSelectionHandler, false);
  } else {
    document.body.attachEvent('onclick', blockSelectionHandler);//for IE
  }

  for (let i = 0; i < allowedBlockTypes.length; i++) {
    let checkbox = createCheckbox(allowedBlockTypes[i], true);
    checkbox.parent('qb_controls');
    selectedBlockTypes.set(allowedBlockTypes[i], allowedBlockTypes[i])
  }

  // generate quilt button
  generateButton = createButton('generate quilt');
  generateButton.mousePressed(generateQuilt);
  generateButton.parent('qb_controls');

  setFabricPullDivColour();
  
  let cfp = document.getElementById('clearFabricPull');
  cfp.addEventListener('click', clearFabricPull, false)

  noLoop();
}

function setFabricPullDivColour() {
  let fp = document.getElementsByClassName('palette_color');
  let labels = document.getElementsByClassName('color_name');

  for (let i = 0; i < fp.length; i++) {
    let paletteElement = fp[i]
    let hex_val = paletteElement.getAttribute("data-color");
    paletteElement.style.backgroundColor = hex_val
    let labelElem = labels[i]
    paletteElement.setAttribute("title", labelElem.innerHTML)
    labelElem.style.visibility = 'hidden';
    paletteElement.addEventListener('click', addToFabricPull, false)
  }
}

function clearFabricPull(e) {
  palette = []
}

function addToFabricPull(e) {
  var target = e.target || e.srcElement;
  let hex_val = target.getAttribute("data-color");
  palette.push(hex_val)
  console.log('added' + hex_val)
}

function blockSelectionHandler(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  if (target.type == 'checkbox') {
    blockName = target.parentElement.children[1].innerHTML;
    if (target.checked) {
      selectedBlockTypes.set(blockName, blockName)
    } else {
      selectedBlockTypes.delete(blockName);
    }
  }
}

function generateQuilt() {
  console.log(selectedBlockTypes.size + " block types selected.")
  clear();
  draw();
}

// draw a grid of quilt blocks using cellSize to control how big/small the blocks are
function draw() {
  for (let y = 0; y < height; y += cellSize) {
    for (let x = 0; x < width; x += cellSize) {
      drawBlock(x, y, cellSize)
    }
  }
}

// the x and y coordinates we want to draw at
// the size of the cell
function drawBlock(x, y, cellSize) {
  console.log("drawing block with x: " + x + " and y: " + y)
  push();
  translate(x, y);   // make everything is relative to (0,0)

  let r = Math.round(random(0, selectedBlockTypes.size - 1));
  randomBlockType = Array.from(selectedBlockTypes.keys())[r]

  switch (randomBlockType) {
    case BlockNames.HST:
      block = new BlockHST(cellSize, Orientation.RANDOM);
      block.draw();
      break;
    case BlockNames.FOUR_PATCH:
      block = new BlockFourPatch(cellSize, Orientation.RANDOM);
      block.draw();
      break;
    case BlockNames.MARYS_TRIANGLE:
      block = new BlockMarysTriangle(cellSize, Orientation.RANDOM);
      block.draw();
      break;
    case BlockNames.HST_SQUARED:
      block = new BlockHSTSquared(cellSize, Orientation.RANDOM);
      block.draw();
      break;
    case BlockNames.RECTANGLES:
      block = new BlockRectangles(cellSize, Orientation.RANDOM, 4);
      block.draw();
      break;
    case BlockNames.BIRDS_IN_THE_AIR:
      block = new BlockBirdsInTheAir(cellSize, Orientation.RANDOM);
      block.draw();
      break;
    case BlockNames.FLYING_GEESE:
      block = new BlockFlyingGeese(cellSize, Orientation.RANDOM);
      block.draw();
      break;
    case BlockNames.CORNER_BEAM:
      block = new BlockCornerBeam(cellSize, Orientation.RANDOM);
      block.draw();
      break;
    case BlockNames.QST:
      block = new BlockQST(cellSize, Orientation.RANDOM, true);
      block.draw();
      break;
    case BlockNames.SQUARE_IN_SQUARE:
      block = new BlockSquareInSquare(cellSize, Orientation.RANDOM);
      block.draw();
      break;
  }
  pop();
}

// TODO
function blockPlus(cellSize) {
  push();
  fillWithFabricPull();
  // noStroke();
  let gap = 10;
  let sqX = cellSize / 3 - gap / 2;
  let rectWidth = cellSize - gap;
  let rectHeight = (cellSize / 3) - gap;
  square(sqX, 0, cellSize / 3 - gap);
  rect(0, cellSize / 3, rectWidth, rectHeight);
  square(sqX, 70, cellSize / 3);
  pop();
}

function blockHSTSquared(cellSize) {
  push();
  fillWithFabricPull();
  noStroke();
  square(0, cellSize / 2, cellSize / 2);
  triangle(0, 0, cellSize / 2, 0, cellSize / 2, cellSize / 2);
  triangle(cellSize / 2, cellSize / 2, cellSize, cellSize / 2, cellSize, cellSize);
  pop();
}

function blockHalfSquareLeft(cellSize) {
  push();
  fillWithFabricPull();
  noStroke();
  rect(0, 0, cellSize / 2, cellSize);
  pop();
}

function blockHalfSquareMiddle(cellSize) {
  push();
  fillWithFabricPull();
  noStroke();
  rect(0, cellSize / 3, cellSize, cellSize / 3);
  pop();
}

function blockHalfSquareRight(cellSize) {
  push();
  fillWithFabricPull();
  noStroke();
  rect(cellSize / 2, 0, cellSize / 2, cellSize);
  pop();
}

function blockCellSquare(cellSize) {
  push();
  // fill('#FFFFFF')
  square(0, 0, cellSize);
  // noStroke();
  pop();
}

function blockCircle(x, y, cellSize) {
  push();
  fillWithFabricPull();
  circle(x, y, cellSize);
  noStroke();
  pop();
}

function blockArcTopLeft(x, y, cellSize) {
  push();
  fillWithFabricPull();
  let arcSize = cellSize - 10;
  arc(0, 0, arcSize, arcSize, radians(180), radians(270));
  noStroke();
  pop();
}

function blockArcTopRight(x, y, cellSize) {
  push();
  fillWithFabricPull();
  let arcSize = cellSize - 10;
  arc(x, y, arcSize, arcSize, radians(270), radians(360));
  noStroke();
  pop();
}

function blockArcBottomLeft(x, y, cellSize) {
  push();
  fillWithFabricPull();
  let arcSize = cellSize - 10;
  arc(x, y, arcSize, arcSize, radians(90), radians(180));
  noStroke();
  pop();
}

function blockArcBottomRight(x, y, cellSize) {
  push();
  fillWithFabricPull();
  let arcSize = cellSize - 10;
  arc(x, y, arcSize, arcSize, radians(0), radians(90));
  noStroke();
  pop();
}


// TODO
function blockDiamondInSquare(cellSize) {
  push();
  fillWithFabricPull();
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

function fillWithFabricPull() {
  if (palette.length == 0) {
    fill("#FFFFFF")
    return
  }

  fill(palette[Math.round(random(0, palette.length-1))]);
}

function randomColorMindPalette() {
  fill(palette[Math.round(random(0, 4))]);
}

function fillWhite() {
  fill('#FFFFFF')
}

function queryColorMind() {
  var url = "http://colormind.io/api/";
  var data = {
    model: "default",
    // input : [[44,43,44],[90,83,82],"N","N","N"]
  }

  var http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      palette = JSON.parse(http.responseText).result;
      console.log(palette)
    }
  }

  http.open("POST", url, true);
  http.send(JSON.stringify(data));
}
