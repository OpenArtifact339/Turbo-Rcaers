class Form{
    constructor(){
      this.greetings = createElement("h3");
      this.title = createElement("h2");
      this.input = createInput("?");
      this.button = createButton("play");
    }
    display(){

      this.title.html("Turbo Racers");
      this.title.position(displayWidth/2-50,0);  
      
      this.input.position(displayWidth/2-40,displayHeight/2-80);
      
      this.button.position(displayWidth/2+30,displayHeight/2);
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount = playerCount+1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
         
          this.greetings.html("Hello "+player.name);
          this.greetings.position(displayWidth/2-70,displayHeight/4);
          
      })
    }
    hide(){
      this.title.hide();
      this.greetings.hide();
      this.input.hide();
      this.button.hide();
    }
}