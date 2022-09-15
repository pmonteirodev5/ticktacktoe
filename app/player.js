const checkMovementStorage = () => {
    const hasMovements = window.localStorage.getItem('movement');
    if (hasMovements && JSON.parse(hasMovements).length > 0) {
        const movements = JSON.parse(hasMovements);
        if (movements[0].type === 'PLAYER_1_MOVEMENT' && movements.length === 1) {
            return movements;
        }
    }
    return [];
}
const hasMovements = window.localStorage.getItem('movement');
if (hasMovements && JSON.parse(hasMovements).length > 0) {
    const movements = JSON.parse(hasMovements);
    const movement = movements[movements.length - 1].type
    window.localStorage.setItem('movement', JSON.stringify(movements));

}
const setPlayerSide = (movement, gameMovement) => {
    const hasMovements = checkMovementStorage();
    if (hasMovements && hasMovements.length > 0) {
        hasMovements.push({
            type: 'PLAYER_2_MOVEMENT',
            movement
        });
        window.localStorage.setItem('movement', JSON.stringify(hasMovements));

    } else {
        if (gameMovement === 0) {
            hasMovements.push({
                type: 'PLAYER_1_MOVEMENT',
                movement
            })
            window.localStorage.setItem('movement', JSON.stringify(hasMovements));

        }
    }

}
const getPlayerSide = (side) => {
    if (window.localStorage.getItem('movement')) {
        const movements = JSON.parse(window.localStorage.getItem('movement'));
        if (movements && movements.length > 0) {
            const winningMovement = movements.find(movement => movement.movement === side);
            if (winningMovement) {
                return winningMovement.type;
            } else {
                return '';
            }
        }
    }
}
