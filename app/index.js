const cellElements = document.querySelectorAll('[data-cell]');

const startGame = () => {
    document.querySelector('#player1header').style.font = 'bold 40px';
    for (let i = 0; i < cellElements.length; i++) {
        cellElements[i].addEventListener('click', (event) => {
            movement(event, i);
        }, {once: true});
    }
}

startGame();