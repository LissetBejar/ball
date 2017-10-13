
function Ball(){
  // properties
  this.clr = color (random (100),random (100),random (100));
  this.x = random(width);
  this.y = random(height);
  this.speedX = random(7, 10);
  this.speedY = random(7, 10);
  this.rad = random(20, 60);
  
  // methods
  this.update = function(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    this.checkEdges(); // function CALL
    this.render();
  }
  
  this.render = function(){
    fill(this.clr);
    ellipse(this.x, this.y, this.rad, this.rad);
  }
  
  this.checkEdges = function(){
    if(this.x > width)  this.speedX = -this.speedX;
    if(this.x < 0)  this.speedX = -this.speedX;
    if(this.y > height)  this.speedY = -this.speedY;
    if(this.y < 0)  this.speedY = -this.speedY;
  }
}
