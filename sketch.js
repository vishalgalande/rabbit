var garden,rabbit;
var gardenImg, rabbitImg;
var apple, appleImg, leave, leaveImg;
var a = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leaveImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating rabbit running
  
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //make rabbit move
  rabbit.x = mouseX;

  //apple stuff
  if (frameCount % 80 == 0)
  {
    createApple();
    createLeave();
  }
  if (a == 1)
  {
    aD();
  }

  rabbit.setCollider("rectangle", 0, 0, 500, 600)
  //rabbit.debug = true;
  drawSprites();
}

function createApple(i)
{
  apple = createSprite(random(40, 380), random(30, 70), 10, 10)
  apple.addImage(appleImg);
  apple.scale = 0.05
  apple.velocityY = random(5, 7);
  apple.lifetime = 200;
  a = 1;

  
}

function createLeave()
{
  leave = createSprite(random(40, 380), random(30, 70), 10, 10);
  leave.addImage(leaveImg);
  leave.scale = random(0.03, 0.07);
  leave.velocityY = random(4, 6);
}

function aD()
{
  console.log("hello")
  if (apple.collide(rabbit))
  {
    apple.destroy();
  }
}