let playerOneScore = 0;
let playerTwoScore = 0;

const playerOneScoreElement = document.querySelector('#player1Score');
const playerTwoScoreElement = document.querySelector('#player2Score');

playerOneScoreElement.innerText = playerOneScore;
playerTwoScoreElement.innerText = playerTwoScore;
const initScore = () => {
    const hasScore = localStorage.getItem(`score`);
    if (hasScore) {
        const totalScore = JSON.parse(hasScore);
        totalScore.forEach((score) => {
            if (score.player === 'PLAYER_1_MOVEMENT') {
                playerOneScore = score.score;
                playerOneScoreElement.innerText = playerOneScore;
            } else {
                playerTwoScore = score.score;
                playerTwoScoreElement.innerText = playerTwoScore;
            }
        })
    }
}
const addPointToPlayerOne = () => {
    playerOneScore += 1;
    playerOneScoreElement.innerText = playerOneScore;
    setScore({
        player: 'PLAYER_1_MOVEMENT',
        score: playerOneScore
    })
}
const addPointToPlayerTwo = () => {
    playerTwoScore += 1;
    playerTwoScoreElement.innerText = playerTwoScore;
    setScore({
        player: 'PLAYER_2_MOVEMENT',
        score: playerTwoScore
    })
}

const setScore = ({player, score}) => {
    const hasScore = localStorage.getItem(`score`);
    let totalScore = [];
    if (hasScore) {
        totalScore = JSON.parse(hasScore);
        totalScore.push({
            player,
            score
        });

    } else {
        totalScore = [];
        totalScore.push({
            player,
            score
        });
    }
    window.localStorage.setItem('score', JSON.stringify(totalScore));

}
initScore();