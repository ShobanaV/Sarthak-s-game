class Game{

   constructor(){}
  
   readGameState(){
    var gameStateRef = db.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
   }

   updateGameState(stateValue){
       db.ref("/").update({
           gameState : stateValue
       })
   }

   start(){
      if(gameState === 0){ 
       player = new createPlayer();
       player.readPlayerCount()
       form = new Form();
       form.display()
      }
   }

   updatePositions(){
       form.greeting.hide();
       player.readPlayersAndDisc();
       if(gameObject !== undefined){
        //    console.log(gameObject);
           p1.body.position.x = gameObject.player1.x           
           p1.body.position.y = gameObject.player1.y           
           p2.body.position.x = gameObject.player2.x          
           p2.body.position.y = gameObject.player2.y           
           disc.body.position.x = gameObject.disc.x
           disc.body.position.y = gameObject.disc.y

           var currentPlayer = null;
            var force = 0

           if(player.index === 1){
                currentPlayer = "player1"
                
            }else if(player.index === 2){
                currentPlayer = "player2"
                
            }

            player.x = gameObject[currentPlayer].x;
            player.y = gameObject[currentPlayer].y;
            disc.x = gameObject.disc.x;
            disc.y = gameObject.disc.y;
     
        if(keyDown(LEFT_ARROW)){
            player.x = player.x - 10
            player.updatePlayerDetails();
        }
        if(keyDown(RIGHT_ARROW)){
            player.x = player.x + 10 
            player.updatePlayerDetails();
        }
        if(keyDown(UP_ARROW)){
            player.y = player.y - 10 
            player.updatePlayerDetails();
        }
        if(keyDown(DOWN_ARROW)){
            player.y = player.y + 10
            player.updatePlayerDetails();
        }
        
       
       
        var distance = dist(player.x, player.y, disc.x, disc.y);
        // console.log(distance);
        if(distance < 40) {
           if(player.x < disc.x) {
               disc.x += 5;
           } else if(player.x > disc.x) {
               disc.x -= 5;
           } 

           if(player.y < disc.y) {
               disc.y += 5;
           } else if(player.y > disc.y) {
               disc.y -= 5;
           }
            
        }
        
        disc.updateDiscDetails();
    }
   }
    

}