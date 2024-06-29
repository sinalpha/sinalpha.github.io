export class StarManager{
    
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    init(){
        stars.children.iterate(function (child) {
    
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        
        });
    }

    getStars(){
        return this.stars;
    }
}