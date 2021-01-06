const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground,ball;
 var binImg,bin;

function preLoad(){
	binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground();
	paper = new paper();

	bin = createSprite(954,520,20,20);
	bin.addImage(binImg);
	bin.scale = 0.45;

	binPart1 = newDustbin(902,505,10,120);
	binPart2 = newDustbin(962,565,130,10);
	binPart3 = newDustbin(1024,505,10,120);
}
	
function draw() {
	background(0);
	Engine.update(engine);
  
	ground.display();
	crumpledPaper.display();
    dustbin.display();
    paper.display();
	binPart1.display();
	binPart2.display();
	binPart3.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body,body.position,{x:85,y:85});
	}
}
