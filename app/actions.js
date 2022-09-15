const CIRCLE_CLASS = 'circle';
const X_CLASS = 'x';
let isCircleTurn = false;
let countMovement = 0;
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
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
        setPlayerSide(currentClass, countMovement);
    }
    const endGame = checkWin(currentClass);
    if (endGame) {
        announceWinner(currentClass);
        finishGame();
    }
}
const movement = (e, index) => {
    const cell = e.target;
    placeMovement(cell, index);

    countMovement++;

}
