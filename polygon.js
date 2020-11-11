class Polygon{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            friction : 1,
            density : 10
        }
        this.radius = radius;
        
        this.body = Bodies.circle(x,y,this.radius/2);
        World.add(world,this.body);
        Matter.Body.setMass(this.body,this.body.mass*10);

    }
    display(){
      
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}