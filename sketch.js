var bullet , wall;
var speed, weight;
var thickness , deformation ;

function setup() {
  createCanvas(1600,400);

  thickness= random (22 , 83);

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor='white';

  wall = createSprite(1200,200,thickness,height/2);
  speed =  random(223,321);
  weight = random(30,52);
  bullet .velocityX=speed;
}

function draw() {
  background(0,0,0);
  
  if((wall.x-bullet.x) <= (bullet.width+wall.width)/2){
    bullet.x=wall.x-(bullet.width+1);
    bullet.velocityX=0;
    deformation = (0.5*weight*speed*speed/22500);
    if (deformation>180){
      bullet.shapeColor='white';
    }
    if (deformation<=180 && deformation>=80){
      bullet.shapeColor='white';
    }
    if (deformation<80){
      bullet.shapeColor='white';
    }
  }


if (hasCollided(bullet , wall))
{
  bullet.velocityX = 3;
  var damage= 0.5 * weight * speed* speed/(thickness *thickness *thickness);

if (damage>10)
{
  wall.shapeColor = "red";
}
if (damage<10)
{
  wall.shapeColor = "green";
}

}

  drawSprites();

}

function hasCollided (bullet , wall)
{
  bulletRightEdge = bullet.x = bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
else{
return false;
 
 
}
}