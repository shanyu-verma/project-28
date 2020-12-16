
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var stone1;
var chain1;
var ground;
var boy,boyI;
var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;


function preload()
{
	boyI = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	stone1 = new Stone(200,300,40);
	boy = createSprite(200,710);
	boy.addImage("boy",boyI);
	boy.scale = 0.1;

	
	chain1 = new SlingShot(stone1.body,{x:150,y:650});
	ground = new Ground(600,780,1200,20);

	tree1 = new Tree(800,460,10,10);

	mango1 = new Mango(800,460,40);
	mango2 = new Mango(800,300,40);
	mango3 = new Mango(700,290,40);
	mango4 = new Mango(1000,400,40);

	mango5 = new Mango(1000,260,40);
	mango6 = new Mango(900,300,40);
	mango7 = new Mango(700,460,40);
	mango8 = new Mango(1100,360,40);

	mango9 = new Mango(900,200,40);

	mango10 = new Mango(1200,360,40);

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background("lightblue");
  
	textSize(18);
	fill("black");
	stroke("black");
	text("PRESS SPACE TO RESET",500,100);

	detectCollide(stone1,mango1);
	detectCollide(stone1,mango2);
	detectCollide(stone1,mango3);
	detectCollide(stone1,mango4);
	detectCollide(stone1,mango5);
	detectCollide(stone1,mango6);
	detectCollide(stone1,mango7);
	detectCollide(stone1,mango8);
	detectCollide(stone1,mango9);
	detectCollide(stone1,mango10);




	tree1.display();
	stone1.display();
	mango1.display(); 
	mango2.display(); 
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display(); 
	mango9.display(); 
	mango10.display(); 
	//chain1.display();
	ground.display();
  	drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain1.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		chain1.attach(stone1.body);
	}
}

function detectCollide(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}


}
