export default class BombManager{
    bombs

    constructor(phaser){
        bombs = phaser.physics.add.group();
    }

    hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        gameOver = true;
    }
}