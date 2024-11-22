import Splash from './scenes/splash.js';
import Game from './scenes/game.js';
import BootLoader from './scenes/bootLoader.js';
import Status from './scenes/status.js';
import Menu from './scenes/menu.js';
import Food from './scenes/food.js';

/*

    game Screen Size.

*/
const gameScreenSize = { width:window.innerWidth , height:window.innerHeight };

/*

    a parent of a canvas that is our game.

*/
const gameParent = "container";

function addResizeEvnetListener(game){

    let myGameCanvas = document.getElementsByTagName("canvas")[0];

    window.addEventListener('resize', function(event) {
        
        myGameCanvas.width = window.screen.width;
        myGameCanvas.height = window.screen.height;

    }, true);

}

const config = {
    width:gameScreenSize.width,
    height:gameScreenSize.height,
    type:Phaser.WEBGL,
    parent: gameParent,
    scene: [Splash, Game, BootLoader, Status, Menu, Food],
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    postBoot: addResizeEvnetListener
}


const game = new Phaser.Game(config);


/*

    add resize event Listener

*/

