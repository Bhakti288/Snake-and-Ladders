class Tile {

    constructor(x,y,wh,next,index){

        this.x = x;
        this.y = y;
        this.wh = wh;
        this.next = next;
        this.index = index;

        if(this.index%2===0){
            this.color = 255;
        } else {
            this.color = 50;
        }
    }

    /*getCenter(){
        let cx = this.x + this.wh/2;
        let cy = this.y + this.wh/2;
        return[cx,cy];
    }*/

    show(){
        fill(this.color);
        rect(this.x,this,y,this.wh,this.wh);
    }
}