export default class SystemManager{

    score;
    scoreText;

    constructor(phaser){
        this.score = 0
        this.scoreText = phaser.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }

    init(this_){
        
    }

}