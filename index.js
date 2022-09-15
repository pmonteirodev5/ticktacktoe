import actions from "./app/actions.js";
import elements from "./app/core/elements.js";
import playerStorage from "./app/storage/player-storage.js";

const cellElements = elements.cellElements;
const movement = actions.movement;
const initStorage = playerStorage.initStorage;
const getScore = playerStorage.getScore;
export const startGame = () => {
    document.querySelector('#player1header').style.font = 'bold 40px';
    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].addEventListener('click', (event) => {
            movement(event, i);
        }, {once: true});
    }

}
window.onload = () => {
    startGame();
    initStorage();
    const score = getScore();
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

