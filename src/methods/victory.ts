import {Cell, CellStateEnum} from "../model";
import {Helper} from "./helper";

export class Victory {
    public isThereAWinner(cells: Cell[]): boolean {
        let isWin = false;
        cells.map(c => {
            const row = Helper.getRowPos(c);
            const col = Helper.getColPos(c);
            const possibleRightRowVictory = Helper.FourOrMoreOnRight(col);
            const possibleLeftRowVictory = Helper.FourOrMoreOnLeft(col);
            const possibleColVictory = Helper.FourOrMoreOnBottom(row);

            if(c.state === CellStateEnum.NEUTRAL) {
                return;
            }

            if (
                possibleRightRowVictory && possibleColVictory && this.checkRightDiagVictory(cells, c)
                || possibleLeftRowVictory && possibleColVictory && this.checkLeftDiagVictory(cells, c)
                || possibleRightRowVictory && this.checkRowVictory(cells, c)
                || possibleColVictory && this.checkColVictory(cells, c)
            ) {
                isWin = true;
            }
        });
        return isWin;
    }

    private checkRightDiagVictory(cells: Cell[], cell: Cell): boolean {
        return (
            cells[cell.id + 8].state === cell.state
            && cells[cell.id + 16].state === cell.state
            && cells[cell.id + 24].state === cell.state
        );

    }

    private checkLeftDiagVictory(cells: Cell[], cell: Cell): boolean {
        return (
            cells[cell.id + 6].state === cell.state
            && cells[cell.id + 12].state === cell.state
            && cells[cell.id + 18].state === cell.state
        );

    }

    private checkRowVictory(cells: Cell[], cell: Cell): boolean {
        return (
            cells[cell.id + 1].state === cell.state
            && cells[cell.id + 2].state === cell.state
            && cells[cell.id + 3].state === cell.state
        );

    }

    private checkColVictory(cells: Cell[], cell: Cell): boolean {
        return (
            cells[cell.id + 7].state === cell.state
            && cells[cell.id + 14].state === cell.state
            && cells[cell.id + 21].state === cell.state
        );

    }
}