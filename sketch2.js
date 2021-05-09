var item3, Thund3r, level, edges;
var count = 90;

function setup(){
    Thund3r = createSprite(60,250,50,50);
    Thund3r.shapeColor = "black";
    item3 = createSprite(1150,250,10,10);
    item3.velocityY = 9;
    item3.velocityX = 9;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
  
    function timer(){
      count=count-1;
      if (count <= 0)
      {
         clearInterval(counter);
         //counter ended, do something here
         return;
      }
    
       console.log(count)
    }
}

function draw(){
    createCanvas(1200,500);
    background("red");
    fill("black");
    textSize(30);
    text("Timer : " + count, 1000, 50);
    if(keyDown ("w")){
  Thund3r.y = Thund3r.y - 7
  }  
    if(keyDown ("s")){
  Thund3r.y = Thund3r.y + 7
  } 
    if(keyDown ("a")){
  Thund3r.x = Thund3r.x - 7
  }  
    if(keyDown ("d")){
  Thund3r.x = Thund3r.x + 7
  } 
  if (count <= 0){
    text("Game Over", 570, 240);
  }
  if (Thund3r.isTouching(item3)){
  text("Completed Been Has Game The You By.", 425, 240);
  item3.velocityY = 0;
  item3.velocityX = 0;
  level = 4;
  }
edges = createEdgeSprites();
item3.bounceOff(edges);
Thund3r.bounceOff(edges);
drawSprites();
}