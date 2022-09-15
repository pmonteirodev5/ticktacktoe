const PLAYER_1_MOVEMENT = 'PLAYER_1_MOVEMENT';
const PLAYER_2_MOVEMENT = 'PLAYER_2_MOVEMENT';
const checkWin = (currentClass) => {
    return isWinning(currentClass);
}
const isWinning = (currentClass) => {
    const whoWon = winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    });
    return whoWon;
}

const announceWinner = (currentClass) => {
    const winner = getPlayerSide(currentClass);
    if(winner === PLAYER_1_MOVEMENT) {
        addPointToPlayerOne();
    } else {
        addPointToPlayerTwo();
    }
}