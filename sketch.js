var canvas,gameState = 0,playerCount,database,form,player,game,allPlayers,car1,car2,car3,car4,cars;


function setup(){
  database = firebase.database();
  canvas = createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount == 4){
    game.updateState(1);
    
  }
  if(gameState == 1){
    clear();
    game.play();
  }
}

