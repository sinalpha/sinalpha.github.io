import PlayerManager    from './playerManager.js'
import StarManager      from './starManager.js'
import PlatformManager  from './platformManager.js'
import BombManager      from './bombManager.js'
import SystemManager    from './systemManager.js'

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
    

    let playerManager = new PlayerManager(this)
    let platformManager = new PlatformManager(this)
    let bombManager = new BombManager(this)
    let starManager = new StarManager(this)
    let systemManager = new SystemManager(this)

    playerManager.init(this);
    platformManager.init(this);
    bombManager.init(this);
    starManager.init(this);
    systemManager.init(this);

    this.physics.add.collider(playerManager.player, platformManager.platform);
    this.physics.add.collider(starManager.stars, platformManager.platforms);
    this.physics.add.collider(bombManager.bomb, platformManager.platforms);
    this.physics.add.collider(playerManager.player, bombManager.bombs, bombManager.hitBomb, null, this);
    this.physics.add.overlap(playerManager.player, starManager.stars, starManager.collectStar, null, this);
}

function update ()
{
    let cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown)
        {
            playerManager.player.setVelocityX(-160);
        
            playerManager.player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            playerManager.player.setVelocityX(160);
        
            playerManager.player.anims.play('right', true);
        }
        else
        {
            playerManager.player.setVelocityX(0);
        
            playerManager.player.anims.play('turn');
        }
        
        if (cursors.up.isDown && playerManager.player.body.touching.down)
        {
            playerManager.player.setVelocityY(-330);
        }
}