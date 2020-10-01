
class Ball {

    constructor(x,y,radius){
   var options={
     'restitution': 0.8
   }


 this.body = Bodies.circle(x,y,radius,options);
 this.width = radius;
 this.height = radius;

 World.add(world,this.body);



    }

 display(){

ellipseMode(RADIUS);
fill ("blue");
ellipse(this.body.position.x,this.body.position.y,this.width,this.height);


 }

  
  }