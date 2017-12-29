import * as React from "react";
import {PlayerEnum} from "../model";

export class HeaderComponent extends React.Component<{activePlayer: PlayerEnum}, {}> {
    render() {
        return (
            <span>The active player is : {this.props.activePlayer}</span>
        );
    }
}
