const PLAYER_1_MOVEMENT = 'PLAYER_1_MOVEMENT';
const PLAYER_2_MOVEMENT = 'PLAYER_2_MOVEMENT';
const CIRCLE_CLASS = 'circle';
const X_CLASS = 'x';
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
const constants = {
    PLAYER_1_MOVEMENT,
    PLAYER_2_MOVEMENT,
    winningCombinations,
    CIRCLE_CLASS,
    X_CLASS
}
export default constants;