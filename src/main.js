import Splash from './scens/splash.js'
import Game from './scens/game.js'

const config = {
    widht: 400,
    height: 300,
    parent: "container",
    type: Phaser.CANVAS,   
    scene: [Splash, Game]
}

new Phaser.Game(config);