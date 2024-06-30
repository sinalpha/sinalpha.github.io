import Splash from './scens/splash.js'

const config = {
    widht: 400,
    height: 300,
    parent: "container",
    type: Phaser.CANVAS,   
    scene: [Splash]
}

new Phaser.Game(config);