let playerOneScore = 0;
let playerTwoScore = 0;
import elements from "../core/elements.js";
const playerOneScoreElement = elements.playerOneScoreElement;
const playerTwoScoreElement = elements.playerTwoScoreElement;

playerOneScoreElement.innerText = playerOneScore;
playerTwoScoreElement.innerText = playerTwoScore;
const addPointToPlayerOne = () => {
    playerOneScore += 1;
    playerOneScoreElement.innerText = playerOneScore;
    setScore({
        player: 'PLAYER_1_MOVEMENT',
        score: playerOneScore
    })
}
const setPlayerOneScore = (score) => {
    playerOneScore = score;
    playerOneScoreElement.innerText = playerOneScore;
}
const addPointToPlayerTwo = () => {
    playerTwoScore += 1;
    playerTwoScoreElement.innerText = playerTwoScore;
    setScore({
        player: 'PLAYER_2_MOVEMENT',
        score: playerTwoScore
    })
}
const setPlayerTwoScore = (score) => {
    playerTwoScore = score;
    playerTwoScoreElement.innerText = playerTwoScore;
}
const initStorage = () => {
    const playerSide = window.sessionStorage.getItem('playerSide');
    const score = window.sessionStorage.getItem('score');
    if (!playerSide) {
        window.sessionStorage.setItem('playerSide', JSON.stringify([]));
    }
    if (!score) {
        window.sessionStorage.setItem('score', JSON.stringify([]));
    }
}
const getMovements = () => {
    const movements = window.sessionStorage.getItem('playerSide');
    if (movements) {
        return JSON.parse(movements);
    }
}
const getScore = () => {
    const score = window.sessionStorage.getItem('score');
    if (score) {
        return JSON.parse(score);
    }
}
const getPlayerSide = (side) => {
    const playerSide = window.sessionStorage.getItem('playerSide');
    if (playerSide) {
        const playerSides = JSON.parse(playerSide);
        const playerFirstMovement = playerSides.find(movement => movement.movement === side);
        if (playerFirstMovement) {
            return playerFirstMovement.type;
        } else {
            return '';
        }
    }
}
const setPlayerSide = (movement, gameMovement) => {
    const movements = getMovements();
    if (movements && movements.length < 2) {
        if (gameMovement === 0) {
            movements.push({
                type: 'PLAYER_1_MOVEMENT',
                movement
            })
        } else {
            movements.push({
                type: 'PLAYER_2_MOVEMENT',
                movement
            });
        }
    }

    window.sessionStorage.setItem('playerSide', JSON.stringify(movements));
}
const setScore = ({player, score}) => {
    const totalScore = getScore();
    if (totalScore) {
        totalScore.push({
            player,
            score
        })
    }
    window.sessionStorage.setItem('score', JSON.stringify(totalScore));

}
const playerStorage = {
    initStorage,
    getMovements,
    getPlayerSide,
    setPlayerSide,
    getScore,
    addPointToPlayerOne,
    addPointToPlayerTwo,
    setScore,
    setPlayerOneScore,
    setPlayerTwoScore,
}
export default playerStorage;