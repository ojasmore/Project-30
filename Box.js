class Box {
    constructor(x,y,width,height) {
      
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      this.body.speed = this.body.velocity;
      World.add(world, this.body);

      this.color = color(random(0,255),random(0.255),random(0,255));
    }
    display(){
      
      if(this.body.speed<3){

        var pos =this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);

      }
      else{
        World.remove(world,this.body);
      }  
      
    }
    
  }