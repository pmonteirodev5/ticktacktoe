import actions from "./app/actions.js";
import elements from "./app/core/elements.js";
import playerStorage from "./app/storage/player-storage.js";
const cellElements = elements.cellElements;
const movement = actions.movement;
const initStorage = playerStorage.initStorage;
const startGame = () => {
    document.querySelector('#player1header').style.font = 'bold 40px';
    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].addEventListener('click', (event) => {
            movement(event, i);
        }, {once: true});
    }
    initStorage();
}

startGame();