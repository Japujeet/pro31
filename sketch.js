const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkos = [];
var balls = [];
var divisions = [];


function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,1000);

  ground1 = new Ground(400,1000,800,20);
  ground2 = new Ground(0,500,20,1000);
  ground3 = new Ground(800,500,20,1000);
  ground4 = new Ground(400,0,800,20);

  for(var i = 0; i < 800; i = i + 113){
    divisions.push(new Div(i,875,10,250));
  }
  console.log(divisions);
  for(var j = 50; j < 355; j = j + 50){
    plinkos.push(new Plinko(j,100));
  }
  
  

  
}

function draw() {

  Engine.update(engine);

  background(0); 

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  for (var i = 0; i <800; i++ ) { 
   divisions[i].display();
  }
  
  for (var j = 50; j <355; j++ ) { 
    plinkos[j].display();
   }


  drawSprites();
}