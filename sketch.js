var road,seaImg;
var ship,shipImg;

function preload()
{
seaImg = loadImage("path.png");
shipImg = loadAnimation("Runner-1.png" , "Runner-2.png");
}

function setup()
{
  createCanvas(400,400);

  road = createSprite (200,200);
  road.addImage(seaImg);

  ship = createSprite (250,200,50,50);
  ship.addAnimation ("runner_running",shipImg);

  ship.scale = 0.1;
  road.scale = 1.2;
  road.velocityY = 4;
}

function draw() 
{
  background("Lightblue");

  road.velocityY = 4;

  if (road.y > 400)
  {
    road.y = road.height/2;
  }
  
  drawSprites();
}