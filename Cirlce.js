class Circle{
  constructor(x,y,radius){

  
  var options={
     restitution:0.1,
     friction:0,
     density:0.8,
     isStatic:false
  }
  this.body=Bodies.circle(x,y,radius/2,options)
  this.radius=radius
  World.add(world,this.body)
  
  }
  display(){
var pos=this.body.position

push()
translate(pos.x,pos.y)

ellipseMode(RADIUS)
ellipse(0,0,this.radius,this.radius)
pop()

  }
  }