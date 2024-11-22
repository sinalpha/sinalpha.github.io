import {config} from './gameConfig.js'

const game = new Phaser.Game(config);


/*

    add resize event Listener

*/
let myGameCanvas = document.getElementsByTagName("canvas")[0];
window.addEventListener('resize', function(event) {
    
    myGameCanvas.width = window.screen.width;
    myGameCanvas.height = window.screen.height;

}, true);