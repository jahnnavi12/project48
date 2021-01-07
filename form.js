class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.next=createButton('NEXT');
    this.title2 = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.title2.hide();
    this.next.hide();
  }

  play(){
    
    this.greeting.html("Hi " + player.name+" your father is a woodcutter and Seeing him cut tress you decided to plant five trees .")
    this.greeting.position(displayWidth/2-250, displayHeight/4-20);
    this.title2.html("(so do not forget to plant trees daily)");
    this.title2.position(displayWidth/2 - 250, displayHeight/4+35);
  }

  display(){
    this.title.html("Plants");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.next.position(displayWidth-550,400);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.updateCount(playerCount);
      //this.greeting.html("Hi " + player.name+"your father is a woodcutter.")
      //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

    this.next.mousePressed(()=>{
      game.update(1);
    });
  }
}
