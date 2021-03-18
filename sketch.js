const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,200,400,30)
	bobObject1=new Circle(200,350,20)
	bobObject2=new Circle(300,350,20)
	bobObject3=new Circle(400,350,20)
    bobObject4=new Circle(500,350,20)
	bobObject5=new Circle(600,350,20)

	var render = Matter.Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
rope1=new Rope(bobObject1.body,roof.body,-25*4,0)
rope2=new Rope(bobObject2.body,roof.body,-25*2,0)
rope3=new Rope(bobObject3.body,roof.body,0,0)
rope4=new Rope(bobObject4.body,roof.body,25*2,0)
rope5=new Rope(bobObject5.body,roof.body,25*4,0)


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);  
  drawSprites();
 roof.display()

 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()

 bobObject1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-60,y:-60})

}
/*if (keyCode===50){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:200})
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:200})
}*/

}
