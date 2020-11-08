var ground,paperball;
var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var paperObject,dustbinObj,groundObject;


function preload()
{
	
}

function setup() {
	createCanvas(1300, 900);


	engine = Engine.create();
	 world = engine.world;
	  dustbinObj=new Dustbin(1200,650);
	   paperObject=new Paper(200,450,40);
		groundObject=new Ground(width/2,670,width,20);
		 var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } }); 
		 Engine.run(engine);

	


		
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  drawSprites();
 
}
function keyPressed()
 { if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}); } }


