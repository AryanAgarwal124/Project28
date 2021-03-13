class Launcher {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.004,
        lenght: 50
      } 
      this.pointB = pointB;
      this.launcher = Constraint.create(options);
      World.add(world,this.launcher);
      }

      fly(){
        this.launcher.bodyA = null;
      }
      
      attach(body){
        this.launcher.bodyA = body;

      }

      display(){
        if(this.launcher.bodyA){
        strokeWeight(4);
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
      }

}