import {config} from './gameConfig.js'

const game = new Phaser.Game(config);

window.addEventListener('resize', function(event) {
    
    console.log("detected resize");
    let myGameCanvas = getElementByTagName();

}, true);