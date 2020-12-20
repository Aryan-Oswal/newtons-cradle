class Slingshot{
    constructor(bodyA, bodyB , offSetX){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: offSetX , y: 0},
            
        }
        this.sling = Constraint.create(options);
        this.offSetX = offSetX
        World.add(world, this.sling);
    }
    display() {
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x + this.offSetX, pointB.y)
    }
}