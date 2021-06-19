class Snow{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("snow4.webp")
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
        }
        display(){
            push()
            translate(this.body.position.x,this.body.position.y);
            image(this.image,0,0,this.r,this.r);
            fill(this.color)
            pop()
        }
    }