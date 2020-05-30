class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function (data){
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if(gameState == 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        
        if(allPlayers != undefined){
            var x = 0,index = 0,y;
            for(var plr in allPlayers){
               x = x+200;
               index++;
               y = displayHeight - allPlayers[plr].distance;
               cars[index-1].x = x;
               cars[index-1].y = y;
               if(index == player.index){
                console.log(index,player.index)   
                cars[index-1].shapeColor = "magenta";
                   camera.position.x = displayWidth/2;
                   camera.position.y = cars[index - 1].y;
               }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!=null){
            player.distance+=50;
            player.update();

        }
        drawSprites();
    }
}