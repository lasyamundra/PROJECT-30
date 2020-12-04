//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon,polygonImg;


function preload(){
  polygonImg = loadImage ("polygon.png");
}


function setup() {
  createCanvas(1200,500);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (600,490,1200,20);
  levelHigh = new Ground (989,220,200,15);
  levelLow = new Ground (480,400,270,15);

  //levelHigh
  block1 = new Block (930,200,30,50);
  block2 = new Block (960,200,30,50);
  block3 = new Block (990,200,30,50);
  block4 = new Block (1020,200,30,50);
  block5 = new Block (1050,200,30,50);
  
  block6 = new Block (960,160,30,50);
  block7 = new Block (990,160,30,50);
  block8 = new Block (1020,160,30,50);
  
  block9 = new Block (990,120,30,50)

  //levelLow
  block10 = new Block (390,380,30,50);
  block11 = new Block (420,380,30,50);
  block12 = new Block (450,380,30,50);
  block13 = new Block (480,380,30,50);
  block14 = new Block (510,380,30,50);
  block15 = new Block (540,380,30,50);
  block16 = new Block (570,380,30,50);

  block17 = new Block (420,340,30,50);
  block18 = new Block (450,340,30,50);
  block19 = new Block (480,340,30,50);
  block20 = new Block (510,340,30,50);
  block21 = new Block (540,340,30,50);

  block22 = new Block (450,300,30,50);
  block23 = new Block (480,300,30,50);
  block24 = new Block (510,300,30,50);

  block25 = new Block (480,200,30,50);

  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  slingShot = new SlingShot(this.ball,{x:100,y:200});

  Engine.run(engine);
}


function draw() {
  background(56,44,44);  

  ground.display();
  levelHigh.display();
  levelLow.display();

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
  block22.display();
  block23.display();
  block24.display();
  block25.display();

  slingShot.display();
  
  imageMode(CENTER);
  image(polygonImg,ball.position.x,ball.position.y,40,40);
  

drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition (this.ball,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.ball);
  }
}
