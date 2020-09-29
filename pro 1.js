var car , wall;
var speed , weight;
var defornation;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500); 
  car = createSprite(50,200,50,10);
  wall = createSprite(1500,200,10,80);
  car.velocityX = speed;

}

function draw() {
  background("black");  
  if(wall.x - car.x < (car.width+wall.width)/2){
      car.velocityX = 0;
      defornation = (0.5*weight*speed*speed)/22500;
      if(defornation>180){
          car.shapeColor = ("red");
      }
      if(defornation<180 && defornation>100){
        car.shapeColor = ("yellow");
      }
      if(defornation<100){
        car.shapeColor = ("green");
      }
  }
  drawSprites();
}