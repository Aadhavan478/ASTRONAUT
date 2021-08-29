var bg,backgroundImage;
var sleep;
var brush;
var gym;
var eat;
var drink; 
var move;
var astronaut;
var bath;

function preload()
{
  backgroundImage = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png");
  eat = loadAnimation("eat1.png");
  drink = loadAnimation("drink1.png");
  move = loadAnimation("move.png");
  bath = loadAnimation("bath1.png");
}

function setup() {
  createCanvas(800,400);

  bg = createSprite(200,100);
  bg.addImage(backgroundImage);
  bg.scale = 0.1;

  astronaut = createSprite(200,130);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);

  if(keyDown("UP_ARROW"))
  {
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 130;
  astronaut.VeloxityX = 0;
  astronaut.VelocityY = 0;
  }

  if(keyDown("DOWN_ARROW"))
  {
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y = 130;
  astronaut.VeloxityX = 0;
  astronaut.VelocityY = 0;
  }

  if(keyDown("LEFT_ARROW"))
  {
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 130;
  astronaut.VeloxityX = 0;
  astronaut.VelocityY = 0;
  }

  if(keyDown("RIGHT_ARROW"))
  {
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y = 130;
  astronaut.VeloxityX = 0;
  astronaut.VelocityY = 0;
  }
  if(keyDown("m"))
  {
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y = 130;
  astronaut.VeloxityX = 0;
  astronaut.VelocityY = 0;
  }
  
  drawSprites();
 }