class Form{

    constructor(){
        this.input = createInput("");
        this.input.position(250,250);

        this.button = createButton("Play");
        this.button.position(250,300) 
        
        this.greeting =createElement("h3");
        this.greeting.position(250,300)

        this.reset = createButton("RESET");
        this.reset.position(400, 10);
    }

    display() {
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value()
            this.greeting.html(" Hi " + name + " wait for the other player to join")
            playerCount++
            player.updatePlayerCount(playerCount);
            player.index = playerCount
        })

        this.reset.mousePressed(()=> {
            db.ref("/").update({
                gameState : 0,
                playerCount : 0
            });
        });
    }

}