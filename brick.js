class Brick{
    id;
    constructor(id) {
        this.id = id;
        this.layout = brick_layout[id];
        this.activeIndex = 0;
        this.colposition = 3;
        this.rowposition = 5;
    }
    draw() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== white_colorid) {
                    board.drawCell(col + this.colposition, row + this.rowposition, this.id);
                }
            }
        }
    }
    clear(){
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== white_colorid) {
                    board.drawCell(col + this.colposition, row + this.rowposition, white_colorid);
                }
            }
        }
    }
    moveLeft(){
        if (!this.checkCollision(this.rowposition,this.colposition-1,this.layout[this.activeIndex])){
            this.clear();
            this.colposition --;
            this.draw();
        }
    }
    moveRight(){
        if (!this.checkCollision(this.rowposition,this.colposition +1,this.layout[this.activeIndex])){
            this.clear();
            this.colposition ++;
            this.draw();
        }
    }
    moveDown(){
        if (!this.checkCollision(this.rowposition + 1,this.colposition,this.layout[this.activeIndex])) {
            this.clear();
            this.rowposition++;
            this.draw();
        }
    }
    rotate(){
        if (!this.checkCollision(this.rowposition,this.colposition,this.layout[(this.activeIndex + 1) %4])){
            this.clear();
            this.activeIndex = (this.activeIndex + 1) %4;
            this.draw();
        }
    }
    checkCollision(nextRow,nextCol,nextLayout){
        if(nextCol <0) return true;

        for (let row = 0; row < nextLayout.length; row++) {
            for (let col = 0; col < nextLayout[0].length; col++) {
                if (nextLayout[row][col] !== white_colorid) {
                   if((col+nextCol >= cols)||(row + nextRow >= rows))
                       return true;
                }
            }
        }
        return false;
    }
}