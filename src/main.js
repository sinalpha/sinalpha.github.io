import Splash from './scenes/splash.js'
import Game from './scenes/game.js'
import BootLoader from './scenes/bootLoader.js';

// const MAX_SIZE_WIDTH_SCREEN = 1920
// const MAX_SIZE_HEIGHT_SCREEN = 1080
// const MIN_SIZE_WIDTH_SCREEN = 270
// const MIN_SIZE_HEIGHT_SCREEN = 480
// const SIZE_WIDTH_SCREEN = 540
// const SIZE_HEIGHT_SCREEN = 960

// const config = {
//     type: Phaser.AUTO,
//     scale: {
//         mode: Phaser.Scale.RESIZE,
//         parent: 'container',
//         width: SIZE_WIDTH_SCREEN,
//         height: SIZE_HEIGHT_SCREEN,
//         min: {
//             width: MIN_SIZE_WIDTH_SCREEN,
//             height: MIN_SIZE_HEIGHT_SCREEN
//         },
//         max: {
//             width: MAX_SIZE_WIDTH_SCREEN,
//             height: MAX_SIZE_HEIGHT_SCREEN
//         }
//     },
//     scene: [BootLoader, Splash, Game]
// }

// const game = new Phaser.Game(config);

// game.screenBaseSize = {
//     maxWidth: MAX_SIZE_WIDTH_SCREEN,
//     maxHeight: MAX_SIZE_HEIGHT_SCREEN,
//     minWidth: MIN_SIZE_WIDTH_SCREEN,
//     minHeight: MIN_SIZE_HEIGHT_SCREEN,
//     width: SIZE_WIDTH_SCREEN,
//     height: SIZE_HEIGHT_SCREEN
// }


const width = window.innerWidth;
const height = window.innerHeight;
const config = {
    type:Phaser.AUTO,
    width:width,
    height:height,
    parent: 'container',
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
        width:width,
        height:height
    },
    scene: [BootLoader, Splash, Game]
}

const game = new Phaser.Game(config);