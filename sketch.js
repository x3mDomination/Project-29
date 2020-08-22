const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,platform1,platform2,platform3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21;
var polygon,position,polygonIMG,polygonOptions;

var score = 0;

function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-10,width,20);
  platform1 = new Ground(500,400,300,15);
  platform2 = new Ground(950,250,200,15);
  platform3 = new Ground(950,500,200,15);

  //layer 1, platform1
  block1 = new Box(425,350,50,75,"cyan");
  block2 = new Box(475,350,50,75,"cyan");
  block3 = new Box(525,350,50,75,"cyan");
  block4 = new Box(575,350,50,75,"cyan");
  //layer 2, platform1
  block5 = new Box(450,275,50,75,"red");
  block6 = new Box(500,275,50,75,"red");
  block7 = new Box(550,275,50,75,"red");
  //layer 3, platform1
  block8 = new Box(475,200,50,75,"white");
  block9 = new Box(525,200,50,75,"white");
  //layer 4, platform1
  block10 = new Box(500,125,50,75,"yellow");
  //layer 1, platform2
  block11 = new Box(925,175,50,75,"cyan");
  block12 = new Box(975,175,50,75,"cyan");
  //layer 2, platform2
  block13 = new Box(925,125,50,75,"red");
  block14 = new Box(975,125,50,75,"red");
  //layer 3, platform2
  block15 = new Box(950,50,50,75,"white");
  //layer 1, platform3
  block16 = new Box(900,450,50,75,"cyan");
  block17 = new Box(950,450,50,75,"cyan");
  block18 = new Box(1000,450,50,75,"cyan");
  //layer 2, platform3
  block19 = new Box(925,375,50,75,"red");
  block20 = new Box(975,375,50,75,"red");
  //layer 3, platform3
  block21 = new Box(950,300,50,75,"white");

  polygonOptions = {
    isStatic:false,
    restitution:0,
    density:1.2
  }

  polygon = Bodies.circle(200,300,50,polygonOptions);
  World.add(world,polygon);
  position = polygon.position;

  sling = new SlingShot(polygon,{x:200,y:300});
}

function draw() {
  background(100);  
  drawSprites();
  Engine.update(engine);

  ground.display();
  platform1.display();
  platform2.display();
  platform3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  sling.display();

  ellipseMode(CENTER);
  push();
  fill("red");
  ellipse(position.x,position.y,100,100);
  pop();
  console.log(block1.body.speed);
  textSize(20);
  fill("white");
  text("Blocks hit: "+score,width/2,50);
}

function mouseDragged(){
  Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}