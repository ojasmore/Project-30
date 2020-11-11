const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "notlaunched";
var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var constraintobject;
var slingshot;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,590,1200,20);
  stand1 = new Stand(500,400,250,20);
  stand2 = new Stand(800,300,250,20);

  box1 = new Box(420,385,40,40);
  box2 = new Box(460,385,40,40);
  box3 = new Box(500,385,40,40);
  box4 = new Box(540,385,40,40);
  box5 = new Box(580,385,40,40);
  box6 = new Box(440,365,40,40);
  box7 = new Box(480,365,40,40);
  box8 = new Box(520,365,40,40);
  box9 = new Box(560,365,40,40);
  box10 = new Box(460,345,40,40);
  box11 = new Box(500,345,40,40);
  box12 = new Box(540,345,40,40);
  box13 = new Box(480,325,40,40);
  box14 = new Box(520,325,40,40);
  box15 = new Box(500,305,40,40);

  box16 = new Box(720,285,40,40);
  box17 = new Box(760,285,40,40);
  box18 = new Box(800,285,40,40);
  box19 = new Box(840,285,40,40);
  box20 = new Box(880,285,40,40);
  box21 = new Box(740,265,40,40);
  box22 = new Box(780,265,40,40);
  box23 = new Box(820,265,40,40);
  box24 = new Box(860,265,40,40);
  box25 = new Box(760,245,40,40);
  box26 = new Box(800,245,40,40);
  box27 = new Box(840,245,40,40);
  box28 = new Box(780,225,40,40);
  box29 = new Box(820,225,40,40);
  box30 = new Box(800,205,40,40);

  constraintobject = new Polygon(200,200,40);
  slingshot = new Slingshot(constraintobject.body,{x:200,y:200});

  Engine.run(engine);
}

function draw() {

  Engine.update(engine);

  background(255); 
  
  ground.display();
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  
  slingshot.display();
  constraintobject.display();
  
  drawSprites();
  
  keyPressed();

}

function mouseDragged()
{ 
  if(gameState === "notlaunched"){
    Matter.Body.setPosition(constraintobject.body,{x:mouseX,y:mouseY});
  }
}
function mouseReleased()
{
  gameState = "launched";
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode === 32 && gameState === "launched")
  {
    gameState = "notlaunched";
    Matter.Body.setPosition(constraintobject.body,{x:200 , y:200});
    slingshot.attach(constraintobject.body);
  }
}
