export default class Uniguri extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y){
        super(scene, x, y, 'uniguri-default');

        this.scene = scene;
        
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    create(){
        this.setCollideWorldBounds(true);
    }

    preupdate(){

    }



}