class Box {
    
    constructor(){
        var options = {
            isStatic : true,
        }
        this.leftBody = Bodies.rectangle(width / 2 - 100, 570, 30, 200 , options)
        this.bottomBody = Bodies.rectangle(width / 2, 660, 200, 30, options)
        this.rightBody = Bodies.rectangle(width /2 + 100 , 570,30,200, options )
        
        this.image = loadImage('dustbingreen.png')
        World.add(world, this.rightBody,this.bottomBody,this.leftBody )
        
    }
    display() {
        
        fill('red');
        strokeWeight(0)
        rectMode(CENTER)
        var pos2 = this.rightBody.position
        var pos1 = this.bottomBody.position
        var pos3 = this.leftBody.position
        //rect(pos1.x, pos1.y, 200, 30)

        rect(pos2.x, pos2.y, 30, 200)
        
        rect(pos3.x, pos3.y, 30, 200)
        imageMode(CENTER);

        image(this.image ,pos1.x , pos1.y - 85 , 250,220 )
        
    }
}