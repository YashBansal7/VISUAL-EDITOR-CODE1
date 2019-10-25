var mr,fr;
function setup() {
  createCanvas(800,400);
  mr =createSprite(200, 200, 50, 50);
   fr=createSprite(100, 200, 50, 50);
   mr.shapeColor="blue";
   fr.shapeColor="aqua";
   ob =createSprite(100, 100, 50, 50);
   ob2=createSprite(700,300, 50, 50);
  ob.shapeColor="blue";
   ob2.shapeColor="aqua";
}

function draw() {
  background(0);  
  mr.x=World.mouseX;
  mr.y=World.mouseY;
 if(collide(mr,fr)){
mr.shapeColor="green";
fr.shapeColor="lightgreen";
mr.width=7000;
mr.height=7000;
fr.x=400;
 }
 else{
  mr.shapeColor="blue";
  fr.shapeColor="aqua";
  mr.width=50;
  fr.x=100;
 }
 if(collide(mr,ob)){
  mr.shapeColor="green";
  ob.shapeColor="lightgreen";
   }
   else{
    mr.shapeColor="blue";
    ob.shapeColor="aqua";
   }
   if(collide(mr,ob2)){
    mr.shapeColor="green";
    ob2.shapeColor="lightgreen";
     }
     else{
      mr.shapeColor="blue";
      ob2.shapeColor="aqua";
     }
  drawSprites();
}
