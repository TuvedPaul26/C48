var wall1, wall2, arrow, Thund3r, ledge1, ledge2, disappLedge1, disappLedge2, groupOfArrow, invisibleWall1, invisibleWall2, item2;
var level3 = 3;
var count = 90;

function setup (){
createCanvas(1200,500);
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
  
function timer(){

  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
}
Thund3r = createSprite(60,250,50,50);
Thund3r.shapeColor = "black";
wall1 = createSprite(500,220,60,225);
wall1.shapeColor = "orange";
wall1.velocityY = 3;
wall2 = createSprite(500,280,60,225);
wall2.shapeColor = "red";
wall2.velocityY = -3;
invisibleWall1 = createSprite(500,-30,60,20);
invisibleWall2 = createSprite(500,530,60,20);
ledge1 = createSprite(650,250,100,65);
ledge1.shapeColor = "green";
ledge2 = createSprite(850,250,100,65);
ledge2.shapeColor = "green";
item2 = createSprite(1150,250,10,10);
groupOfArrow = createGroup();
}

function draw (){
    background("blue");
    fill("black");
    textSize(30);
    text("Timer : " + count, 1000, 50);
if(keyDown ("w")){
        Thund3r.x = Thund3r.x + 9;
        }  
if(keyDown ("s")){
        Thund3r.x = Thund3r.x - 9;
        }
if (Thund3r.isTouching(groupOfArrow)){
text("Game Over You Died", 800, 440);
groupOfArrow.setVelocityYEach(0);
wall1.velocityY = 0;
wall2.velocityY = 0;
}
if (Thund3r.isTouching(wall1) || Thund3r.isTouching(wall2)){
text("Game Over You Died", 800, 440);
groupOfArrow.setVelocityYEach(0);
wall1.velocityY = 0;
wall2.velocityY = 0;
}
wall1.bounceOff(invisibleWall2);
wall2.bounceOff(invisibleWall1);
wall2.bounceOff(invisibleWall2);
wall1.bounceOff(invisibleWall1);
    BrittanySpears();
    Magic();
Thund3r.depth = ledge1.depth + 6;
if (Thund3r.isTouching(item2)){
    text("Completed Been Has Level 2 You By.", 675, 450);
    level = 3;
    }
    drawSprites();
}

function BrittanySpears (){
    if (World.frameCount % 40 === 0){
var ramboArrow = Math.round(random(200,300))
arrow = createSprite(ramboArrow, -50, 10, 20);
arrow.velocityY = 10;
groupOfArrow.add(arrow);
}
}

function Magic (){
if (World.frameCount % 105 === 0){
disappLedge1 = createSprite(750,250,100,65);
disappLedge1.shapeColor = "green";
disappLedge1.lifetime = 45;
disappLedge1.depth = Thund3r.depth - 1
disappLedge2 = createSprite(950,250,100,65);
disappLedge2.shapeColor = "green";
disappLedge2.lifetime = 45;
disappLedge2.depth = Thund3r.depth - 1
}
}