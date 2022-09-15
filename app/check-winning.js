import storage  from "./storage/player-storage.js";
import constants from "./core/constants.js";
import elements from "./core/elements.js";
const checkWin = (currentClass) => {
    return isWinning(currentClass);
}
const isWinning = (currentClass) => {
    const whoWon = constants.winningCombinations.some(combination => {
        return combination.every(index => {
            return elements.cellElements[index].classList.contains(currentClass);
        })
    });
    return whoWon;
}

const announceWinner = (currentClass) => {
    const winner = storage.getPlayerSide(currentClass);
    if(winner === constants.PLAYER_1_MOVEMENT) {
        storage.addPointToPlayerOne();
    } else {
        storage.addPointToPlayerTwo();
    }
    document.querySelector('#winnerName').style.font = 'bold 40px';
    document.querySelector('#winnerName').innerHTML = winner === constants.PLAYER_1_MOVEMENT ? 'Player 1' : 'Player 2';
}
const checkWinning = {
    checkWin,
    announceWinner
}
export default checkWinning;