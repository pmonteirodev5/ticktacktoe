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
}
const checkWinning = {
    checkWin,
    announceWinner
}
export default checkWinning;