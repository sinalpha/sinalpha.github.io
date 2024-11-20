export default class Poop extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'poop')

        scene.physics.add.existing(this);
        scene.add.existing(this);
    }
}