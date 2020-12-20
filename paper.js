class Paper {
    
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.5,
           
	}
        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius
        World.add(world , this.body)
    }
    display() {
        push()
        strokeWeight(0)
        var pos = this.body.position
        ellipseMode(RADIUS)
        translate(pos.x, pos.y)
        ellipse(0 , 0 , this.radius , this.radius)
        pop()
    }
}