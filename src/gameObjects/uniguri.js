export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y);

        this.setPosition( x, y);
        scene.add.existing(this);

        // scene.physics.add.existing(this);
        this.body.setVelocityY(300);
    }

    create(){
        
        // this.setCollideWorldBounds(true);
    }

    preupdate(){

    }



}