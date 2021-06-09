class Player {

   constructor(x,y,w,h, img){
       var options = {
           restitution:0.5,
           density:1.5,
           friction:0.2,
           isStatic:false
       };

       this.body = Bodies.rectangle(x, y, w, h, options);
       this.img = img;
       this.width = w;
       this.height = h;
       World.add(world, this.body);
   }

   display() {
       var pos = this.body.position;
       push();
       imageMode(CENTER);
       image(this.img, pos.x, pos.y, this.width, this.height);
       pop();

   }

}