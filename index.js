import actions from "./app/actions.js";
import elements from "./app/core/elements.js";
import playerStorage from "./app/storage/player-storage.js";
import score from "./app/score/index.js";

const cellElements = elements.cellElements;
const movement = actions.movement;
const initStorage = playerStorage.initStorage;
export const startGame = () => {
    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].addEventListener('click', (event) => {
            movement(event, i);
        }, {once: true});
    }
    document.querySelector('#turn').innerHTML = 'Vez de: Player 1';


}
window.onload = () => {
    startGame();
    initStorage();
    score.initScore();
}

