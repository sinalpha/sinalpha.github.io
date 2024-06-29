import { PlayerManager }    from './playerManager.js'
import { StarManager }      from './starManager.js'
import { PlatformManager }  from './platformManager.js'
// import { BombManager }      from './bombManager.js'

export var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude',
    'assets/dude.png',
    { frameWidth: 32, frameHeight: 48 }
);
}

function create ()
{
    this.add.image(400, 300, 'sky');
    var score = 0;
    var scoreText;
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    PlatformManager.init();
    PlayerManager.init();
    BombManager.init();
    StarManager.init();

    this.physics.add.collider(PlayerManager.player, PlatformManager.platform);
    this.physics.add.collider(StarManager.stars, PlatformManager.platforms);
    this.physics.add.collider(BombManager.bomb, PlatformManager.platforms);
    this.physics.add.collider(PlayerManager.player, BombManager.bombs, hitBomb, null, this);
    this.physics.add.overlap(PlayerManager.player, StarManager.stars, StarManager.collectStar, null, this);

}

function update ()
{
    cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown)
        {
            PlayerManager.player.setVelocityX(-160);
        
            PlayerManager.player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            PlayerManager.player.setVelocityX(160);
        
            PlayerManager.player.anims.play('right', true);
        }
        else
        {
            PlayerManager.player.setVelocityX(0);
        
            PlayerManager.player.anims.play('turn');
        }
        
        if (cursors.up.isDown && PlayerManager.player.body.touching.down)
        {
            PlayerManager.player.setVelocityY(-330);
        }
}