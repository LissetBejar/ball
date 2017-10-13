var balls = [];

function setup() {
 var cnv=createCanvas(1000, 900);
 var x=(windowWidth-width)/2
 var y=30
 cnv.position(x,y);
 for(var i = 0; i<50; i++){
   balls.push (new Ball());
 }
}

function draw(){
  fill(20, 50, 220, 10);
  rect(0, 0, width, height);
  for(var i = 0; i<balls.length; i++){
  balls[i].update();
  }
  
  
}

