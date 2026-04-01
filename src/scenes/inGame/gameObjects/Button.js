export default class Button extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);

        this.setOrigin(0.5, 0.5)

    }
    // ...

    // preUpdate(time, delta) {}
}