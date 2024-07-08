export default class Uniguri extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y){
        super(scene, x, y);

        this.setTexture('uniguri-default');
        this.setPosition( x, y);
    
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setGravityY(300);
    }

    preupdate(){

    }



}