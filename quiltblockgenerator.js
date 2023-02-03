let blockCountWidth = 5;
let blockCountHeight = 5;
let canvasSize = 500;
let noCells = 5;
let cellSize = canvasSize / noCells;
let palette = []
let blockSelection = [""]
let allowedBlockTypes = [BlockNames.HST, BlockNames.FOUR_PATCH, BlockNames.MARYS_TRIANGLE]
let selectedBlockTypes = new Map();

// create a canvas
function setup() {
  console.log("setting up canvas with size: " + canvasSize + " and with " + noCells + " cells with cellSize of " + cellSize)
  // colorPicker = createColorPicker('#BB2649');
  // colorPicker.position(0, 0);

  // queryColorMind();
  createCanvas(canvasSize, canvasSize);

  // generate quilt button
  generateButton = createButton('generate quilt');
  generateButton.position(0, 0);
  generateButton.mousePressed(generateQuilt);

  if (document.body.addEventListener) {
    document.body.addEventListener('click', blockSelectionHandler, false);
  }
  else {
    document.body.attachEvent('onclick', blockSelectionHandler);//for IE
  }

  for (let i = 0; i < allowedBlockTypes.length; i++) {
    let checkbox = createCheckbox(allowedBlockTypes[i], true);
    selectedBlockTypes.set(allowedBlockTypes[i], allowedBlockTypes[i])
  }
  noLoop();
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

  let randomShapes = true;

  if (randomShapes == true) {

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
    }
    // if (shape == 2) {
    //   blockFourPatch(cellSize);
    // } else if (shape == 6) {
    //   blockMarysTriangle(cellSize);
    // } else if (shape == 7) {
    //   blockHSTSquared(cellSize);
    // } else if (shape == 8) {
    //   blockRectanglesVertical(cellSize, 0);
    // } else if (shape == 9) {
    //   blockHourGlassTopBottom(cellSize);
    // } else if (shape == 10) {
    //   blockSquareInSquare(cellSize);
    // } else if (shape == 11) {
    //   blockRectanglesHorizontal(cellSize, 0)
    // } else if (shape == 12) {
    //   blockCornerBeamTop(cellSize)
    // } else if (shape == 13) {
    //   blockCornerBeamBottom(cellSize)
    // } else if (shape == 14) {
    //   blockHourGlassLeftRight(cellSize)
    // } else if (shape == 15) {
    //   blockBirdsInTheAir(cellSize)
    // }
    // else if (shape == 16) {
    //   blockFlyingGeese(cellSize)
    // }
  } else {
    blockHST(cellSize)
  }

  pop();
}

function blockHST(cellSize) {
  let type = Math.round(random(1, 4));

  if (type == 1) {
    blockHST1(cellSize);
  } else if (type == 2) {
    blockHST2(cellSize);
  } else if (type == 3) {
    blockHST3(cellSize);
  } else if (type == 4) {
    blockHST4(cellSize);
  }
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
  triangle(0, 0, 0, cellSize, cellSize / 2, cellSize);
  triangle(0, 0, cellSize, 0, cellSize, cellSize / 2);
  pop();
}

function blockCornerBeamBottom(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, cellSize / 2, 0, cellSize, cellSize, cellSize);
  triangle(cellSize / 2, 0, cellSize, 0, cellSize, cellSize);
  pop();
}

function blockFourPatch(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  square(0, 0, cellSize / 2);
  square(cellSize / 2, cellSize / 2, cellSize / 2);
  pop();
}

function blockMarysTriangle(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  square(0, cellSize / 2, cellSize / 2);
  pop();
  blockHST4(cellSize)
}

// TODO
function blockPlus(cellSize) {
  push();
  randomGreenyYelloColorFill();
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
  randomGreenyYelloColorFill();
  noStroke();
  square(0, cellSize / 2, cellSize / 2);
  triangle(0, 0, cellSize / 2, 0, cellSize / 2, cellSize / 2);
  triangle(cellSize / 2, cellSize / 2, cellSize, cellSize / 2, cellSize, cellSize);
  pop();
}

function blockBirdsInTheAir(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, cellSize / 2, cellSize / 2, cellSize / 2, cellSize / 2, 0);
  triangle(0, cellSize, cellSize / 2, cellSize, cellSize / 2, cellSize / 2);
  triangle(cellSize / 2, cellSize / 2, cellSize, cellSize / 2, cellSize / 2, cellSize)
  triangle(cellSize / 2, cellSize / 2, cellSize, cellSize / 2, cellSize, 0)
  pop();
}

function blockHalfSquareLeft(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  rect(0, 0, cellSize / 2, cellSize);
  pop();
}

function blockHalfSquareMiddle(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  rect(0, cellSize / 3, cellSize, cellSize / 3);
  pop();
}

function blockHalfSquareRight(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  rect(cellSize / 2, 0, cellSize / 2, cellSize);
  pop();
}

function blockHourGlassLeftRight(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, 0, cellSize / 2, cellSize / 2, 0, cellSize);
  triangle(cellSize, 0, cellSize / 2, cellSize / 2, cellSize, cellSize);
  pop();
}

function blockHourGlassTopBottom(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, 0, cellSize, 0, cellSize / 2, cellSize / 2);
  triangle(cellSize, cellSize, cellSize / 2, cellSize / 2, 0, cellSize);
  pop();
}

function blockFlyingGeese(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  triangle(0, 0, cellSize, 0, cellSize / 2, cellSize / 2);
  triangle(0, cellSize / 2, cellSize, cellSize / 2, cellSize / 2, cellSize);
  pop();
}

function blockCellSquare(cellSize) {
  push();
  // fill('#FFFFFF')
  square(0, 0, cellSize);
  // noStroke();
  pop();
}

function blockSquareInSquare(cellSize) {
  push();
  randomGreenyYelloColorFill();
  noStroke();
  square(cellSize / 4, cellSize / 4, cellSize / 2);
  pop();
}

function blockRectanglesHorizontal(cellSize, noRectangles) {
  console.log("rectangle shape requested")
  if (noRectangles == 0) {
    noRectangles = Math.round(random(4, 6));
  }
  push();
  noStroke();
  rectHeight = cellSize / noRectangles
  let idx = 0;
  for (let y = 0; y < cellSize; y += rectHeight) {
    if (idx % 2 == 0) {
      randomGreenyYelloColorFill();
    } else {
      fillWhite();
    }
    rect(0, y, cellSize, rectHeight);
    idx++;
  }
  noStroke();
  pop();
}

function blockRectanglesVertical(cellSize, noRectangles) {
  console.log("rectangle vertical shape requested")
  if (noRectangles == 0) {
    noRectangles = Math.round(random(4, 6));
  }
  push();
  noStroke();
  let rectHeight = cellSize / noRectangles
  let idx = 0;
  for (let x = 0; x < cellSize; x += rectHeight) {
    if (idx % 2 == 0) {
      randomGreenyYelloColorFill();
    } else {
      fillWhite();
    }
    rect(x, 0, rectHeight, cellSize);
    idx++;
  }
  noStroke();
  pop();
}

function blockCircle(x, y, cellSize) {
  push();
  randomGreenyYelloColorFill();
  circle(x, y, cellSize);
  noStroke();
  pop();
}

function blockArcTopLeft(x, y, cellSize) {
  push();
  randomGreenyYelloColorFill();
  let arcSize = cellSize - 10;
  arc(0, 0, arcSize, arcSize, radians(180), radians(270));
  noStroke();
  pop();
}

function blockArcTopRight(x, y, cellSize) {
  push();
  randomGreenyYelloColorFill();
  let arcSize = cellSize - 10;
  arc(x, y, arcSize, arcSize, radians(270), radians(360));
  noStroke();
  pop();
}

function blockArcBottomLeft(x, y, cellSize) {
  push();
  randomGreenyYelloColorFill();
  let arcSize = cellSize - 10;
  arc(x, y, arcSize, arcSize, radians(90), radians(180));
  noStroke();
  pop();
}

function blockArcBottomRight(x, y, cellSize) {
  push();
  randomGreenyYelloColorFill();
  let arcSize = cellSize - 10;
  arc(x, y, arcSize, arcSize, radians(0), radians(90));
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
  const colors = ["#0C335E", "#0D7818", "#6FB01D", "#B5BF1D", "#f4f722"];

  fill(colors[Math.round(random(0, 4))]);
}

function randomColorMindPalette() {
  // const colors = ["#0C335E", "#0D7818", "#6FB01D", "#B5BF1D", "#EDEF0C"];

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