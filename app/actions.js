import storage from "./storage/player-storage.js";
import constants from "./core/constants.js";
import elements from "./core/elements.js";
import checkWinning from "./check-winning.js";
const CIRCLE_CLASS = constants.CIRCLE_CLASS;
const X_CLASS = constants.X_CLASS;
const cellElements = elements.cellElements;

let isCircleTurn = false;
let countMovement = 0;
const finishGame = () => {
    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].classList.remove('x');
        cellElements[i].classList.remove('circle');
        cellElements[i].removeEventListener('click', movement);
    }
}
const placeMovement = (cell) => {
    const currentClass = isCircleTurn ? CIRCLE_CLASS : X_CLASS;

    cell.classList.add(currentClass);
    isCircleTurn = !isCircleTurn;
    if (countMovement <= 1) {
        storage.setPlayerSide(currentClass, countMovement);
    }
    const endGame = checkWinning.checkWin(currentClass);
    if (endGame) {
        checkWinning.announceWinner(currentClass);
        finishGame();
    }
}
const movement = (e, index) => {
    const cell = e.target;
    placeMovement(cell, index);

    countMovement++;

}
const actions = {
    movement,
    finishGame
}
export default actions;