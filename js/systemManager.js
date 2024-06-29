export default class SystemManager{

    score;
    scoreText;

    constructor(phaser){
        score = 0
        scoreText = phaser.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }

}