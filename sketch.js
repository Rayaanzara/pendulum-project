
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(710,200,400,20);	
	bob  = new Bob(450,500,20)
    rope= new Rope(bob.body , roof.body , -20*4,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
 roof.display();
 bob.display();
 rope.display();
 

 
}



