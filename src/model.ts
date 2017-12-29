export interface Action {
    type: string;
    [key: string]: any;
}

export interface Connect4State {
    activePlayer: PlayerEnum;
    cells: Cell[];
}

export interface Cell {
    state: CellStateEnum;
    id: number;
}

export enum CellStateEnum {
    NEUTRAL = "neutral",
    YELLOW = "yellow",
    RED = "red"
}

export enum PlayerEnum {
    YELLOW = "yellow",
    RED = "red"
}