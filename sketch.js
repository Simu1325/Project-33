const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,snow;

function setup() {
  bg=loadImage("snow3.jpg")
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  s1=new Snow(100,5,25);
  s2=new Snow(200,25,25);
  s3=new Snow(250,45,25);
  s4=new Snow(350,50,25);
  s5=new Snow(400,0,25);
  s6=new Snow(550,0,25);
  s7=new Snow(450,0,25);
  s8=new Snow(600,0,25);

}
function draw() {
  background(bg);
  Engine.update(engine);
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  console.log(s1.type)
  drawSprites();
}
