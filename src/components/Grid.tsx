import * as React from "react";
import {CellComponent} from "./Cell";
import {Cell} from "../model";


export class Grid extends React.Component<{cells: Cell[]; onCellClick: Function}, {}> {

    render() {
        return (
            <div className="connect4-grid">
                {this.props.cells.map(c => {
                    return <CellComponent onClick={() => {
                        this.props.onCellClick(c)
                    }} state={c.state} id={c.id} key={c.id.toString()}>{c.id}</CellComponent>
                })}
            </div>
        );
    }

}
