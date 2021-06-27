const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;

var ball;
var box1, box2;
var pig, log;
function setup() {
  createCanvas(1200,400);
 
  myEngine=Engine.create();
  myWorld=myEngine.world;
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  ground=new Ground(600,390,1200,20);
  pig=new Pig(810,350);
  log=new Log(810,260,300,PI/2);
}
function draw() {
  background("black");  
  Engine.update(myEngine);
  box1.display();
  box2.display();
  ground.display();
  pig.display();
  log.display();
}