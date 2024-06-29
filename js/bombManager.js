export default class BombManager{
    
    bombs

    constructor(this_){
        this.bombs = this_.physics.add.group();
    }

    init(phaser){

    }

    hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        gameOver = true;
    }
}