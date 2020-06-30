var movingrect,fixedrect;




function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200,200,50,80);
  fixedrect=createSprite(400,200,80,50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  movingrect.velocityX=5;
  fixedrect.velocityX=-4;
}

function draw() {
  background(0,255,255);
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2) {
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);
  }  
  drawSprites();
}












