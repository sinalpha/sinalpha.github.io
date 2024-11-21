import {config} from './gameConfig.js'

const game = new Phaser.Game(config);

window.addEventListener('resize', function(event) {
    
    console.log("detected resize");
    let myGameCanvas = document.getElementByTagName("canvas")[0];

    myGameCanvas.style.width = window.screen.width;
    myGameCanvas.style.height = window.screen.height;




}, true);