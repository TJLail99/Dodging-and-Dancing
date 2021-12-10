class You {

  constructor() {

    this.x = boundaryx * 0.5;
    this.y = boundaryy * 0.75;
    this.r = 50;

  }

  show() {

    stroke(0);
    fill(40, 0, 184);
    circle(this.x, this.y, this.r);

  }

  move() {
    if (keyIsDown(UP_ARROW) && this.y > (this.r+80)) {

      this.y = this.y - 6;

    } else if (keyIsDown(DOWN_ARROW) && this.y < (boundaryy - this.r-80)) {

      this.y = this.y + 6;

    }
    if (keyIsDown(LEFT_ARROW) && this.x > (this.r+35)) {

      this.x = this.x - 6;

    } else if (keyIsDown(RIGHT_ARROW) && this.x < (boundaryx - this.r-35)) {

      this.x = this.x + 6;

    }
  }
  
  hit(){
  this.x = boundaryx * 0.5;
  this.y = boundaryy * 0.75;

  }
}


class Bullet {

  constructor() {

    this.x = random(55,345);
    this.y = 20;
    this.r = 15;

  }
  
  show(){

    stroke(255);
    strokeWeight(1.5);
    fill(255);
    circle(this.x,this.y,this.r);

  }
  
  
  //enemies

  fly(){

      if (this.y < 700){ 

        this.y = this.y + 20;

      }
      else {

        this.y = 100;
        this.x = random(75,700); 

      }
  }
  
  hit(){

  this.y = 100;
  this.x = random(75,700);

  }
}


