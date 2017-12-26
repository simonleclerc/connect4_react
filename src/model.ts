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