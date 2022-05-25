let board=new Board(ctx);
board.drawBoard();
brick = new Brick(1)
//generateNewBrick();
brick.draw();
function move() {
    switch (event.keyCode) {
        case 37: {
            brick.moveLeft();
            break
        }
        case 38: {
            brick.rotate();
            break;
        }
        case 39: {
            brick.moveRight();
            break;
        }
        case 40: {
            brick.moveDown();
            break;
        }
    }
}