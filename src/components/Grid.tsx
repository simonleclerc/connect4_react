import * as React from "react";
import {CellComponent} from "./Cell";
import {Cell, CellStateEnum, PlayerEnum} from "../model";
import {Helper} from "../methods/helper";
import {Victory} from "../methods/victory";

interface GridState {
    cells: Cell[]
}

interface GridProps {
    onCellClick(cell: Cell): void;
}

export class Grid extends React.Component<any, GridState> {
    private player = PlayerEnum.RED;
    private victory = new Victory();
    constructor(props: any) {
        super(props);

        const cells: Cell[] = [];
        for (let i = 0; i < 7 * 6; i++) {
            cells.push({
                id: i,
                state: CellStateEnum.NEUTRAL
            });
        }

        this.state = {
            cells: cells
        };
    }

    onCellClick(cell: Cell): void {
        const col = Helper.getColPos(cell);
        if (cell.state === CellStateEnum.NEUTRAL && Helper.isAuthorizedPlay(this.state.cells, col)) {
            this.setCellState(Helper.getPlayFromCol(this.state.cells, col));
            if(this.victory.isThereAWinner(this.state.cells)) {
                alert("The player " + this.player + " win !")
            }
            this.nextPlayer();
        }
    }

    setCellState(id: number) {
        const cells: Cell[] = [...this.state.cells];
        cells[id].state = this.player === PlayerEnum.RED ? CellStateEnum.RED : CellStateEnum.YELLOW;

        this.setState({
            cells: cells
        });
    }

    nextPlayer() {
        this.player = this.player === PlayerEnum.RED ? PlayerEnum.YELLOW : PlayerEnum.RED;
    }

    render() {
        return (
            <div className="connect4-grid">
                {this.state.cells.map(c => {
                    return <CellComponent onClick={() => {
                        this.onCellClick(c)
                    }} state={c.state} id={c.id} key={c.id.toString()}>{c.id}</CellComponent>
                })}
            </div>
        );
    }

}
