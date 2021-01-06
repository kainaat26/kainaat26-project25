class paper {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution: 0.2,
          friction:0.3,
          density:1.0
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width =33;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
    fill("red");
    rotate(angle);
    imageMode(CENTER);
    image(this.image.pos.x,pos.y,33,33);
}
}