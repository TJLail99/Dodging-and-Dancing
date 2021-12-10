let boundaryx = 800;
let boundaryy = 800;

let Player;

let Bullets = [];

let i = 0;

let hits = 0;

let end = 0;

let timer = 25;

var gifWin;

var gifLose;



//Menu on 
let menu = true;

function preload(){

  gifWin = createImg("https://res.cloudinary.com/dnd0inkht/image/upload/v1639083708/200_co7xsq.gif");

  gifLose = createImg("https://res.cloudinary.com/dnd0inkht/image/upload/c_scale,h_352/v1639083708/decjxju-e963df79-8a9d-4957-a95f-21eeb0225b40_pdtvxe.gif");

}



function setup() {

  createCanvas(boundaryx, boundaryy);

  Player = new You();

  for (let i = 0; i<50; i++){

    Bullets[i] = new Bullet(this.x,this.y,this.r)
    
    }

  
 

  
}



function mouseClicked(){
  
  menu = false;

  

  

  

  var myAudio = document.getElementById("audio");

  myAudio.play();

  myAudio.volume = 0.2;

  return false;

}

function draw() {



  gifWin.position(850,500);
  gifLose.position(650,400);

  gifWin.hide();
  gifLose.hide();

  
  
  if(menu){

    end = 0;

    background(255);

    text("Can you survive the dodging and dancing challenge?", 25,75);

    text("Use the arrow keys to dodge!", 195,275);

    text("Dodge until the red bar is empty to win!", 125,475);

    text("Click the screen to begin.", 225,675);

    textSize(32);
    
    return

  }
  
  background(255);

  fill(0);
  rect(50,100,700,600);

  Player.show();
  Player.move();

  Bullets[i].show();
  Bullets[i].fly();
  
   
 //boss hp
    fill(255,0,0);
    noStroke();
    rect(5,100,30,(250-end));
    stroke(1);

    line(5,100,5,350);
    line(35,100,35,350);
    line(5,100,35,100);
    line(5,350,35,350);
    
    
    //player health function
    noStroke();
    fill(0,255,0);
    rect(boundaryx-((5-hits)*30)-1.5,boundaryy-25-1.5,150,25);
    stroke(0);
    strokeWeight(1.5);

    line(boundaryx-(150)-1.5,boundaryy-25-1.5,boundaryx-1.5,boundaryy-25-1.5);
    line(boundaryx-(150)-1.5,boundaryy-0.75,boundaryx-1.5,boundaryy-0.75);
    line(boundaryx-(150)-1.5,boundaryy-25-0.75,boundaryx-(150)-1.5,boundaryy-0.75);
    line(boundaryx-0.75,boundaryy-25-1.5,boundaryx-0.75,boundaryy-0.75); 

    fill(0);
    noStroke();
    text("Health",600,792);
    textSize(15);
    
    fill(0);
    noStroke();
    text("Timer",0,375);
    stroke(1);


  
  var d = dist(Player.x,Player.y,Bullets[i].x,Bullets[i].y);

  if (d<(Player.r+Bullets[i].r)-30){

    hits = hits+1;

    Player.hit();

    Bullets[i].hit();

  }
    
  if (frameCount % 60 == 0 && timer > 0){
    timer--
    end = end+10;
  }
  
  
    if (hits > 4){
      fill(255)
      rect(0,0,800,800);
      fill(0);
      textSize(50);
      text("Better luck next time!",180,270);
      end = 0;
      gifLose.show();
    }
  


  if (end >= 250){
      fill(255)
      rect(0,0,800,800);
      fill(0);
      textSize(50);
      text("You're the dancing champion!",80,300);
      hits = 0;
      gifWin.show();

      
    }

   
  
  
  }
  