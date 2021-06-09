class Disc {

    constructor(x,y, d, img){
        var options = {
            restitution:0.5,
            density:0.2,
            friction:0.2,
            isStatic:false
        };
 
        this.body = Bodies.circle(x, y, d, options);
        this.img = img;
        this.diameter = d;
        
        World.add(world, this.body);
        this.x = this.body.position.x
        this.y = this.body.position.y
    }

    updateDiscDetails(){       
        var discRef = db.ref("gameObjects/disc")
        discRef.set({x:this.x,y:this.y})
    }
 
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.img, pos.x, pos.y, this.diameter, this.diameter);
        pop();
 
    }
 
 }