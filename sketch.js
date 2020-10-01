const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,300,50,100);

    //box2 = new Box(175,150,80,70);

    ball = new Ball(175,150,30);

    ground = new Ground(200,395,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill(255);
    box1.display();
    fill("red");
    //box2.display();
    ball.display();
    ground.display();

    //console.log("X " +box2.body.position.x);
    //console.log("Y " +box2.body.position.y);
    //console.log("Angle " +box2.body.angle);
    
   
}