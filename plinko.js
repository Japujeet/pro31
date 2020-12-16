class Plinko{
    constructor(x,y){
        
        var options={
          isStatic:true,
            friction:0,
            density:1
        }
       
      
      this.x=x;
      this.y=y;
      this.body=Bodies.circle(x,y,10,options);
        
        World.add(world,this.body);
    }
    display(){
      
      var pos=this.body.position;
      push();
       translate(pos.x,pos.y)
      ellipseMode(RADIUS);
      fill(255);
     ellipse(pos.x,pos.y,10);
     pop();
     
    }
}