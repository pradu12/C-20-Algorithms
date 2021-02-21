var box1,box2;


function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 50);
  box1.shapeColor ="green";
  box1.velocityX = 2;
  box2 = createSprite (600,200,50,50);
  box2.shapeColor = "green";
  box2.velocityX = -2;


}

function draw() {
  background(255,255,255);  
  //box2.x = mouseX;
  //box2.y = mouseY;
  if(box2.x -box1.x < box2.width/2 + box1.width/2 &&
    box1.x -box2.x < box2.width/2 + box1.width/2 &&
    box2.y-box1.y < box2.height/2 + box1.height/2 &&
    box1.y -box2.y < box2.height/2 +box1.height/2){
    box2.shapeColor = "red";
    box1.shapeColor = "red";
  }else{
    box1.shapeColor = "green";
    box2.shapeColor = "green";
  }
  if(box2.x -box1.x < box2.width/2 + box1.width/2 &&
    box1.x -box2.x < box2.width/2 + box1.width/2 )
    {
     box2.velocityX = box2.velocityX * -1;
     box1.velocityX = box1.velocityX * -1;
    }else if(
    box2.y-box1.y < box2.height/2 + box1.height/2 &&
    box1.y -box2.y < box2.height/2 +box1.height/2)
    {
      box2.velocityY = box2.velocityY * -1;
      box1.velocityY = box1.velocityY * -1;
    }
  drawSprites();
}