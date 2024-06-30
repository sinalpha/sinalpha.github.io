const config = {
    widht: 400,
    height: 300,
    parent: "container",
    type: Phaser.CANVAS,   
    scene: [GameScene]
}

new Phaser.Game(config);