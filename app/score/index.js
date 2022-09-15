import playerStorage from "../storage/player-storage.js";

const initScore = () => {
    const score = playerStorage.getScore();
    if (score && score.length > 0) {
        const currentScorePlayerOne = score.filter(score => score.player === 'PLAYER_1_MOVEMENT');
        const currentScorePlayerTwo = score.filter(score => score.player === 'PLAYER_2_MOVEMENT');
        if (currentScorePlayerOne) {
            playerStorage.setPlayerOneScore(currentScorePlayerOne[currentScorePlayerOne.length - 1].score);
        }
        if (currentScorePlayerTwo) {
            playerStorage.setPlayerTwoScore(currentScorePlayerTwo[currentScorePlayerTwo.length - 1].score);
        }
    }
}
const score = {
    initScore
}
export default score;