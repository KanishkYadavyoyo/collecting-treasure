var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
  
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

gameOver=createSprite(200,180);
gameOver.addImage(endImg);
gameOver.visible = false;

//creating boy running
boy = createSprite(70,450,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
boy.debug = true;
boy.setCollider("circle",0,0,160);


cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();


}

function draw() {
  background(0);
  edges= createEdgeSprites();
  if(gameState===PLAY)
 {
     boy.x = World.mouseX;
    
    
    boy.collide(edges);
    
    //code to reset the background
    if(path.y > 400 ){
      path.y = height/2;
    }
    
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      console.log("cash");
      cashG.destroyEach();
   
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }else if(swordGroup.isTouching(boy)) {
      console.log("END");
    gameState=END;
    }
  
  
 
  }
  else if(gameState===END){
    gameOver.visible = true;
    path.velocityY=0;
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    boy.destroy();
  }
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  cash.setCollider("circle",0,0,40);
  cash.debug = false;

  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
  diamonds.setCollider("circle",0,0,40);
  diamonds.debug = false;

}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  jwellery.setCollider("circle",0,0,40);
  jwellery.debug = false;

  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  sword.setCollider("circle",0,0,40);
  sword.debug = false;

  }
}