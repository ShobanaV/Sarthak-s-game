class createPlayer{

    constructor(){
        this.x = 100
        this.y = 100
        this.index = 0
    }

    readPlayerCount(){
        var playerCountRef = db.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updatePlayerCount(countValue){
        db.ref("/").update({
            playerCount : countValue
        })

    }

    updatePlayerDetails(){
        var playerRef = db.ref("gameObjects/player" + this.index)
        playerRef.update({
            x : this.x,
            y : this.y
        })
    }

    readPlayersAndDisc(){
        var gameObjectsRef = db.ref("gameObjects")
        gameObjectsRef.on("value",function(data){
            gameObject = data.val();
        })
    }

}