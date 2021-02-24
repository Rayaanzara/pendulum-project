class Rope{
    constructor(bodyA,pointB,offsetX,offsetY){
      this.offsetX=offsetX
      this.offsetY=offsetY
        
        
        var options = {
            bodyA:bodyA,
            pointB:pointB ,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness:0.04,
            length:10,
           }
       this.pointB=pointB
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
    
    var pointA = this.rope.bodyA.position 
    var pointB = this.pointB   
    strokeWeight(5);
    
     
    var Anchor1X= pointA.x
    var Anchor1Y= pointA.y

    var Anchor2X= pointA.x+this.offsetX
    var Anchor2Y= pointA.y+this.offsetY

    line(Anchor1X , Anchor1Y , Anchor2X , Anchor2Y);


    }
    }



  