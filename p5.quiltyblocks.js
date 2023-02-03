const Orientation = {
    RANDOM: 'random',
}
const BlockNames = {
    HST: 'HST',
    FOUR_PATCH: 'Four Patch',
    MARYS_TRIANGLE: "Mary's Triangle",
    HST_SQUARED: 'HST Squared',
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
        randomGreenyYelloColorFill();
        noStroke();
        triangle(0, 0, this.cellSize, 0, 0, this.cellSize);
        pop();
    }

    this.blockHST2 = function () {
        push();
        randomGreenyYelloColorFill();
        noStroke();
        triangle(0, this.cellSize, this.cellSize, 0, this.cellSize, this.cellSize);
        pop();
    }

    this.blockHST3 = function () {
        push();
        randomGreenyYelloColorFill();
        noStroke();
        triangle(0, 0, this.cellSize, this.cellSize, 0, this.cellSize);
        pop();
    }

    this.blockHST4 = function () {
        push();
        randomGreenyYelloColorFill();
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
        randomGreenyYelloColorFill();
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
        randomGreenyYelloColorFill();
        noStroke();
        square(0, this.cellSize / 2, this.cellSize / 2);
        pop();
        blockHST4(this.cellSize)
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
        randomGreenyYelloColorFill();
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


function BlockRectangles(cellSize, orientation) {
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
        randomGreenyYelloColorFill();
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

// COPY ME
function Block(cellSize, orientation) {
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
    }

    this.toString = function () {
        return BlockNames.FOUR_PATCH;
    }
}