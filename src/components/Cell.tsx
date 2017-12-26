import * as React from "react";
import {CellStateEnum} from "../model";
export class CellComponent extends React.Component<{state: CellStateEnum, onClick: any, id: number}, {}> {
    render() {
        const cellClass = "connect4-cell connect4-cell-" + this.props.state;
        return (
            <div onClick={this.props.onClick} className={cellClass} />
        );
    }
}
