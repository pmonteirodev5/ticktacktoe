import storage from "./storage/player-storage.js";
import constants from "./core/constants.js";
import elements from "./core/elements.js";
import checkWinning from "./check-winning.js";
import {startGame} from "../index.js";
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
    setTimeout(() => {
        document.querySelector('#winnerName').innerHTML = '';
        startGame();
    }, 1000);
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


    countMovement += 1;
    if(countMovement % 2 === 0) {
        document.querySelector('#turn').innerHTML = 'Vez de: Player 1';
        document.querySelector('#player1header').style.font = 'bold 40px';
    } else {
        document.querySelector('#turn').innerHTML = 'Vez de: Player 2';
        document.querySelector('#player2header').style.font = 'bold 40px';
    }

}
const actions = {
    movement,
    finishGame
}
export default actions;