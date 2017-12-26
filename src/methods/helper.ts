import {Cell, CellStateEnum} from "../model";

export class Helper {
    static isAuthorizedPlay(cells: Cell[], col: number): boolean {
        for (let i = 5; i >= 0; i--) {
            if (cells[i * 7 + col].state === CellStateEnum.NEUTRAL) {
                return true;
            }
        }
        return false
    }

    static getPlayFromCol(cells: Cell[], col: number): number {
        for (let i = 5; i >= 0; i--) {
            if (cells[i * 7 + col].state === CellStateEnum.NEUTRAL) {
                return i * 7 + col;
            }
        }
    }

    static getColPos(cell: Cell): number {
        return cell.id - Math.floor(cell.id / 7) * 7;
    }

    static getRowPos(cell: Cell): number {
        return Math.floor(cell.id / 7);
    }

    static FourOrMoreOnRight(row: number): boolean {
        return 7 - row >= 4;
    }

    static FourOrMoreOnLeft(col: number): boolean {
        return col >= 4;
    }

    static FourOrMoreOnBottom(row: number): boolean {
        return 6 - row >= 4;
    }
}