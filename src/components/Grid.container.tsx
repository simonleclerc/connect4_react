import {connect} from 'react-redux'
import {Grid} from './Grid'
import {Cell, CellStateEnum, Connect4State, PlayerEnum} from "../model";
import {toggleActivePlayer} from "../actions";
import {Helper} from "../methods/helper";
import {Victory} from "../methods/victory";


const setCellState = (id: number) => {
    const cells: Cell[] = [...this.state.cells];
    cells[id].state = this.props.connect4State.activePlayer === PlayerEnum.RED ? CellStateEnum.RED : CellStateEnum.YELLOW;

    this.setState({
        cells: cells
    });
};

const mapStateToProps = (state: Connect4State, ownProps: any) => {
    console.log(state, ownProps);
    return {
        cells: state.cells
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onCellClick: (cell: Cell) => {
            const col = Helper.getColPos(cell);
            if (cell.state === CellStateEnum.NEUTRAL && Helper.isAuthorizedPlay(this.state.cells, col)) {
                this.setCellState(Helper.getPlayFromCol(this.state.cells, col));
                if(Victory.isThereAWinner(this.state.cells)) {
                    alert("The player " + this.props.connect4State.activePlayer + " win !")
                }
                dispatch(toggleActivePlayer());
            }
        }
    }
};

const GridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid as any);

export default GridContainer;