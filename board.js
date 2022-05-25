class Board {
    ctx;
    grid;
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.loadWhiteBoard()
    }
loadWhiteBoard(){
   return Array.from ({length:rows}, () => Array(cols).fill(white_colorid));
}
drawCell(x,y,colorid){
        if(colorid){
            this.ctx.fillStyle = color_map[colorid];
        }else {
            this.ctx.fillStyle = color_map[white_colorid];
        }
        this.ctx.fillRect(x*block_size,y*block_size,block_size,block_size);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(x*block_size,y*block_size,block_size,block_size);
}
drawBoard(){
        for ( let row=0;row<this.grid.length;row ++){
            for ( let col= 0; col <this.grid[0].length;col ++){
                this.drawCell(col,row,white_colorid);
            }
        }
}
}

