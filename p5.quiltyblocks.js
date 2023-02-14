const Orientation = {
    RANDOM: 'random',
}
const BlockNames = {
    HST: 'HST',
    FOUR_PATCH: 'Four Patch',
    MARYS_TRIANGLE: "Mary's Triangle",
    HST_SQUARED: 'HST Squared',
    RECTANGLES: 'Rectangles',
    QST: 'QST',
    BIRDS_IN_THE_AIR: "Bird's in the Air",
    FLYING_GEESE: "Flying Geese",
    CORNER_BEAM: 'Corner Beam',
    SQUARE_IN_SQUARE: 'Square in Square',
}

function BlockHST(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {

        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 4));

            if (type == 1) {
                this.blockHST1();
            } else if (type == 2) {
                this.blockHST2();
            } else if (type == 3) {
                this.blockHST3();
            } else if (type == 4) {
                this.blockHST4();
            }
        }
    }

    this.blockHST1 = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, 0, this.cellSize, 0, 0, this.cellSize);
        pop();
    }

    this.blockHST2 = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, this.cellSize, this.cellSize, 0, this.cellSize, this.cellSize);
        pop();
    }

    this.blockHST3 = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, 0, this.cellSize, this.cellSize, 0, this.cellSize);
        pop();
    }

    this.blockHST4 = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, 0, this.cellSize, 0, this.cellSize, this.cellSize);
        pop();
    }

    this.toString = function () {
        return BlockNames.HST;
    }
}

function BlockFourPatch(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 4));
        }

        this.block();
    }

    this.block = function () {
        push();
        fillWithFabricPull();
        noStroke();
        square(0, 0, this.cellSize / 2);
        square(this.cellSize / 2, this.cellSize / 2, this.cellSize / 2);
        pop();
    }

    this.toString = function () {
        return BlockNames.FOUR_PATCH;
    }
}

function BlockMarysTriangle(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 4));
        }

        this.block();
    }

    this.block = function () {
        push();
        fillWithFabricPull();
        noStroke();
        square(0, this.cellSize / 2, this.cellSize / 2);
        pop();
        hst = new BlockHST(cellSize);
        hst.blockHST4()
    }

    this.toString = function () {
        return BlockNames.FOUR_PATCH;
    }
}

function BlockHSTSquared(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 4));
        }
        this.block();
    }

    this.block = function () {
        push();
        fillWithFabricPull();
        noStroke();
        square(0, this.cellSize / 2, this.cellSize / 2);
        triangle(0, 0, this.cellSize / 2, 0, this.cellSize / 2, this.cellSize / 2);
        triangle(this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize / 2, this.cellSize, this.cellSize);
        pop();
    }

    this.toString = function () {
        return BlockNames.HST_SQUARED;
    }
}

function BlockRectangles(cellSize, orientation, noRectangles) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;
    this.noRectangles = 3;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 2));

            if (type == 1) {
                this.blockRectanglesHorizontal();
            } else if (type == 2) {
                this.blockRectanglesVertical();
            }
        }
    }

    this.toString = function () {
        return BlockNames.RECTANGLES;
    }

    this.blockRectanglesVertical = function () {
        console.log("rectangle vertical shape requested")
        if (this.noRectangles == 0) {
            this.noRectangles = Math.round(random(4, 6));
        }
        push();
        noStroke();
        let rectHeight = this.cellSize / this.noRectangles
        let idx = 0;
        for (let x = 0; x < this.cellSize; x += rectHeight) {
            if (idx % 2 == 0) {
                fillWithFabricPull();
            } else {
                fillWhite();
            }
            rect(x, 0, rectHeight, this.cellSize);
            idx++;
        }
        noStroke();
        pop();
    }

    this.blockRectanglesHorizontal = function () {
        console.log("rectangle shape requested")
        if (this.noRectangles == 0) {
            this.noRectangles = Math.round(random(4, 6));
        }
        push();
        noStroke();
        rectHeight = this.cellSize / this.noRectangles
        let idx = 0;
        for (let y = 0; y < this.cellSize; y += rectHeight) {
            if (idx % 2 == 0) {
                fillWithFabricPull();
            } else {
                fillWhite();
            }
            rect(0, y, this.cellSize, rectHeight);
            idx++;
        }
        noStroke();
        pop();
    }
}

function BlockQST(cellSize, orientation, isHourGlass) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;
    this.isHourGlass = isHourGlass;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 2));

            if (type == 1) {
                this.blockHourGlassLeftRight();
            } else if (type == 2) {
                this.blockHourGlassTopBottom();
            }

        }
    }

    this.blockHourGlassLeftRight = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, 0, this.cellSize / 2, this.cellSize / 2, 0, this.cellSize);
        triangle(cellSize, 0, this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize);
        pop();
    }

    this.blockHourGlassTopBottom = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, 0, this.cellSize, 0, this.cellSize / 2, this.cellSize / 2);
        triangle(cellSize, this.cellSize, this.cellSize / 2, this.cellSize / 2, 0, this.cellSize);
        pop();
    }

    this.toString = function () {
        return BlockNames.QST;
    }
}

function BlockBirdsInTheAir(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 4));
        }

        this.block();
    }

    this.block = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, this.cellSize / 2, this.cellSize / 2, this.cellSize / 2, this.cellSize / 2, 0);
        triangle(0, this.cellSize, this.cellSize / 2, this.cellSize, this.cellSize / 2, this.cellSize / 2);
        triangle(this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize / 2, this.cellSize / 2, this.cellSize)
        triangle(this.cellSize / 2, this.cellSize / 2, this.cellSize, this.cellSize / 2, this.cellSize, 0)
        pop();
    }

    this.toString = function () {
        return BlockNames.BIRDS_IN_THE_AIR;
    }
}

function BlockFlyingGeese(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 4));
        }

        this.block();
    }

    this.block = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, 0, cellSize, 0, cellSize / 2, cellSize / 2);
        triangle(0, cellSize / 2, cellSize, cellSize / 2, cellSize / 2, cellSize);
        pop();
    }

    this.toString = function () {
        return BlockNames.FLYING_GEESE;
    }
}

function BlockCornerBeam(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 2));

            if (type == 1) {
                this.blockCornerBeamBottom();
            } else if (type == 2) {
                this.blockCornerBeamTop();
            }
        }
    }

    this.blockCornerBeamTop = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, 0, 0, this.cellSize, this.cellSize / 2, this.cellSize);
        triangle(0, 0, this.cellSize, 0, this.cellSize, this.cellSize / 2);
        pop();
    }

    this.blockCornerBeamBottom = function () {
        push();
        fillWithFabricPull();
        noStroke();
        triangle(0, this.cellSize / 2, 0, this.cellSize, this.cellSize, this.cellSize);
        triangle(this.cellSize / 2, 0, this.cellSize, 0, this.cellSize, this.cellSize);
        pop();
    }

    this.toString = function () {
        return BlockNames.CORNER_BEAM;
    }
}

function BlockSquareInSquare(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 2));

            this.block();
        }
    }

    this.block = function () {
        push();
        fillWithFabricPull();
        noStroke();
        square(this.cellSize / 4, this.cellSize / 4, this.cellSize / 2);
        pop();
    }

    this.toString = function () {
        return BlockNames.SQUARE_IN_SQUARE;
    }
}

// COPY ME
function Block(cellSize, orientation) {
    this.cellSize = cellSize;
    this.orientation = orientation;
    this.color = color;

    this.draw = function () {
        if (this.orientation == Orientation.RANDOM) {
            let type = Math.round(random(1, 2));

            if (type == 1) {
                this.blockCornerBeamBottom();
            } else if (type == 2) {
                this.blockHourGlassTopBottom();
            }

        }
    }

    this.block = function () {
    }

    this.toString = function () {
        return BlockNames.FOUR_PATCH;
    }
}