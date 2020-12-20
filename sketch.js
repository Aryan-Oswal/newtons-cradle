var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var sling

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	








	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = new Ground(width/2, 40, 500, 40)
	
	


	box1 = new Box()
	
	paper = new Paper(width / 2, 500, 40)
	paper1 = new Paper(width / 2 + 80,500,40)
	paper2 = new Paper(width / 2 + 160 ,500,40)
	paper3 = new Paper(width / 2 - 80 ,500,40)
	paper4 = new Paper(width / 2 - 160, 500, 40)
	sling = new Slingshot(paper.body, ground.body , 0)
	sling2 = new Slingshot(paper1.body , ground.body , 80)
	sling3= new Slingshot(paper2.body , ground.body , 160)
	sling4 = new Slingshot(paper3.body, ground.body , -80)
	sling5 = new Slingshot(paper4.body , ground.body, -160)
	
	
	Engine.run(engine);
  
}


function draw() {
	background('white')
	
  rectMode(CENTER);
	paper.display()
	paper1.display()

	paper2.display()
	paper3.display()
	paper4.display()
	ground.display()
	sling.display()
	sling2.display()

	sling3.display()

	sling4.display()
	sling5.display()

	rectMode(CENTER)
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper4.body, paper4.body.position, {x: -400 , y: -300} )
  }
}



