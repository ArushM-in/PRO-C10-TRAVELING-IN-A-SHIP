


function preload(){
  movingShip=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400);
  sea.addImage(seaImage);
  sea.scale=0.24;

  ship = createSprite(150,200,100,100)
  ship.addAnimation("sailing", movingShip);
  ship.scale=0.3;

}

function draw() {
  background("blue");

  sea.velocityX=-2;

  if (sea.x < 0) {
    sea.x =400;
  }

  drawSprites();
}