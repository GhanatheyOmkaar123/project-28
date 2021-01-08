const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var treeObj,stoneObj;
var mango1,mongo2,mango3,mango4,mango5;
var boy,boyImg;
var sling1;

function preload(){
boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	boy=createSprite(200,470,70,70);
	boy.addImage(boyImg);
	boy.scale=0.10;

	treeObj = new Tree(1200,300,500,500);
	stoneObj = new Stone(150,415,50,50);
	mango1 = new Mango(1100,250,60,80);
	mango2 = new Mango(1200,260,60,100);
	mango3 = new Mango(1300,230,50,80);
	mango4 = new Mango(1150,170,55,75);
	mango5 = new Mango(1250,175,45,65);
	sling1 = new Sling(stoneObj.body,{x:150,y:400});

	Engine.run(engine);
}


function draw() {
	background("black");
	Engine.update(engine);
	strokeWeight(4);
  rectMode(CENTER);
rect(750,540,1550,20);

  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  sling1.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling1.fly();
}

