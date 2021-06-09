var discImage,p1Image,p2Image,disc,p1,p2,rinkImage;
var engine, world;
var discBody, plBody, p2Body,playerCount,gameState,db,gameObject;
var game,form,player;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
playerCount = 0;
gameState = 0;

function preload(){

	discImage = loadImage("images/disc.png");
	p1Image = loadImage("images/P1.png");
	p2Image = loadImage("images/P2.png");
	rinkImage = loadImage("images/paint rink.png");
	
}

function setup(){
	createCanvas(500,500);

	engine = Engine.create();
	world = engine.world;
	db = firebase.database();
	
	p1 = new Player(250, 400, 60, 60, p1Image);
	p2 = new Player(250,100,60,60, p2Image);
	disc = new Disc(250,250,200, discImage);
	game = new Game();
	game.readGameState();
	game.start();
	
	
}

function draw(){
    
	
	/*if(gameState === 0){
		background("white");
		game.start();
	}*/

	if(playerCount === 2){
		game.updateGameState(1)
	}

	if(gameState === 1){
	   background(rinkImage);
	   game.updatePositions();
	   p1.display();
	   p2.display();
	   disc.display();
	   Engine.update(engine);
	}
}

function keyPressed(){
	
}