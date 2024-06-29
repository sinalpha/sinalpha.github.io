export default class PlayerManager{

    player

    constructor(phaser){
        this.player = phaser.physics.add.sprite(100, 450, 'dude');
    }

    init(phaser){
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        phaser.anims.create({
            key: 'left',
            frames: phaser.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        }); 
    
        phaser.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
    
        phaser.anims.create({
            key: 'right',
            frames: phaser.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }
}