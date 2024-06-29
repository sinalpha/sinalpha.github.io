export default class PlatformManager{

    platforms

    constructor(phaser){
        this.platforms = phaser.physics.add.staticGroup(); 
    }

    init(){
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
    }

    getPlatforms(){
        return this.platforms;
    }
}