import {
    ADD_PLAYER_MOVE,
    SET_ACTIVE_PLAYER,
    TOGGLE_ACTIVE_PLAYER
} from './actions'
import {Action, Cell, CellStateEnum, Connect4State, PlayerEnum} from "./model";

const initialState: Connect4State = {
    activePlayer: PlayerEnum.RED,
    cells: []
};

for (let i = 0; i < 7 * 6; i++) {
    initialState.cells.push({
        id: i,
        state: CellStateEnum.NEUTRAL
    });
}

function activePlayer(state: PlayerEnum, action: Action): PlayerEnum {
    switch (action.type) {
        case SET_ACTIVE_PLAYER:
            return action.player;
        case TOGGLE_ACTIVE_PLAYER:
            if (state === PlayerEnum.RED) {
                return PlayerEnum.YELLOW;
            } else {
                return PlayerEnum.RED;
            }
        default:
            return state;
    }
}

function grid(state: Cell[], action: Action): Cell[] {
    switch (action.type) {
        case ADD_PLAYER_MOVE:
            console.log("add player move");
            return state;
        default:
            return state;
    }

}

export default function connect4App(state: Connect4State = initialState, action: Action) {
    return {
        activePlayer: activePlayer(state.activePlayer, action),
        grid: grid(state.cells, action)
    }
}
