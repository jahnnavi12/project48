class Plant {
  constructor(){
  this.seedStock=0;
  this.lastPlanted;
  this.plantStock=0;
  this.image=loadImage('images/seeds.png');
  this.plant=loadImage('images/plant.png');
  }

 updateSeedStock(seedStock){
  this.seedStock=seedStock;
 }
//plant
 updatePlantStock(plantStock){
  this.plantStock=plantStock;
 }

 getPlantedTime(lastPlanted){
   this.lastPlanted=lastPlanted;
 }


 deductPlant(){
   if(this.seedStock>0){
    this.seedStock=this.seedStock-1;
   }
  }
//plant
deductPlants(){
  if(this.plantStock>0){
   this.plantStock=this.plantStock-1;
  }
 }
 getSeedStock(){
  return this.seedStock;
}
  getPlantStock(){
    return this.plantStock;
  }

  display(){
      background(track);

      var x=70,y=100; 
      imageMode(CENTER);
      if(this.seedStock!=0){
      for(var i=0;i<this.seedStock;i++){
        if(i%10==0){
          x=70;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
      }
    }
  }
  displayPlant(){
    var x=700,y=100; 
    if(this.plantStock!=0){
    for(var i=0;i<this.plantStock;i++){
      if(i%20==0){
        x=700;
        y=y+50;
      }
      image(this.plant,x,y,50,50);
      x=x+30;
    }
   }
  }

//  bedroom(){
//   background(plant1,550,500);  
//  }
    
//  garden(){
 //  background(plant2,550,500);  
 // } 

 // washroom(){
  //  background(plant3,550,500); 
 // }
}