import {config} from './gameConfig.js'

const game = new Phaser.Game(config);

window.addEventListener('resize', function(event) {
    
    let myGameCanvas = document.getElementsByTagName("canvas")[0];

    myGameCanvas.style.width = window.screen.width;
    myGameCanvas.style.height = window.screen.height;




}, true);