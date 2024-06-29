export class PlatformManager{

    platforms = this.physics.add.staticGroup();

    init(){
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
    }

    getPlatforms(){
        return this.platforms;
    }
}