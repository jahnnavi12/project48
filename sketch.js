var canvas, backgroundImage;
var trackS;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var car1,cars,car1_img;

function preload(){
track = loadImage("../images/bg.jpg");
seed1=loadImage("images/seeds.png");
plant=loadImage("images/plant.png");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  seedObj = new Plant();

  seedStock=database.ref('seeds');
  seedStock.on("value",readStock);

  plantStock=database.ref('plantedSeeds');
  plantStock.on("value",readPlant);

  plantedTime=database.ref('plantedTime');
  plantedTime.on("value",function(data){
  lastPlanted=data.val();
  });

  //read game state from database
  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });
   
  dog=createSprite(550,250,10,10);
//dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("PLANT SEED");
  feed.position(500,15);
  feed.mousePressed(plantSeeds);

  addFood=createButton("ADD SEEDS");
  addFood.position(400,15);
  addFood.mousePressed(addFoods);

 //next=createButton("NEXT");
  //next.position(800,450);
  //next.mousePressed(nextS);
}


function draw(){


  if(playerCount === 1){
    form.play();

  }
  if(gameState === 1){
form.hide();

addFood.position(400,15); 
feed.position(500,15); 

background(46,139,87);
seedObj.display();
seedObj.displayPlant(); 
plantedTime=database.ref('plantedTime');
plantedTime.on("value",function(data){
  lastPlanted=data.val();
});

fill(255,255,254);
textSize(15);
if(lastPlanted>=12){
  text("Last Planted : "+ lastPlanted%12 + " PM", 150,30);
 }else if(lastPlanted==0){
   text("Last Planted : 12 AM",150,30);
 }else{
   text("Last Planted : "+ lastPlanted + " AM", 150,30);
 }
 var currentTime=hour();  
 if(currentTime==(lastPlanted+12)){
 warning();
 }else if(currentTime==(lastPlanted+24)){
 end();
  }
drawSprites();

  }

}
function readPlant(data){
  plantS=data.val();
  seedObj.updatePlantStock(plantS);
}
//function to read food Stock
function readStock(data){
  seedS=data.val();
  seedObj.updateSeedStock(seedS);
}


//function to update food stock and last fed time
function plantSeeds(){
  seedObj.updateSeedStock(seedObj.getSeedStock()-1);
  database.ref('/').update({
    seeds:seedObj.getSeedStock(),
    plantedTime:hour(),
  });
addPlants();

}

//function to add food in stock
function addFoods(){
  seedS++;
  database.ref('/').update({
    seeds:seedS
  })
}
function addPlants(){
  plantS++;
  database.ref('/').update({
    plantedSeeds:plantS
  });

}
//update gameState
function update(state){
  database.ref('/').update({
    gameState:state
  })
}
function warning(){
text("IT HAS BEEN 12 HOURS SINCE YOU PLANTED TREES. DO NOT FORGET TO PLANT TREES AFTER ANOTHER 12 HOURS.",
displayWidth/2-250, displayHeight/4-20);
}
function end(){
  text("IT HAS BEEN 24 HOURS SINCE YOU PLANTED TREES. YOU FOGOT TO PLANT TREES SO YOU LOST",
  displayWidth/2-250, displayHeight/4-20);
  }

