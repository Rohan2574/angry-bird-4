class SlingShot{
    constructor(body1,body2){
        var option = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.05,
            length: 7
        }
        this.slingshot = Constraint.create(option)
        World.add(world,this.slingshot)  
    }
    display(){
        var p1=this.slingshot.bodyA.position
        var p2 = this.slingshot.bodyB.position
        strokeWeight(3)
        line(p1.x,p1.y,p2.x,p2.y)
    }
}