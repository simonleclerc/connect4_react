import * as React from "react";
import * as ReactDOM from "react-dom";

import {Grid} from "./components/Grid";
import { createStore } from "redux";
import connect4App from "./reducers";
import {Connect4State} from "./model";
import { Provider } from "react-redux";
import HeaderContainer from "./components/Header.container";
import GridContainer from "./components/Grid.container";

let store = createStore(connect4App);
let state: Connect4State = store.getState();
// Log the initial state
// console.log(store.getState());
//
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => {
//         console.log(store.getState());
//         state = store.getState();
//     }
// );

// Dispatch some actions
// store.dispatch(toggleActivePlayer());

// Stop listening to state updates
// unsubscribe();
ReactDOM.render(
    <Provider store={store}>
        <div>
            <HeaderContainer />
            <GridContainer />
        </div>
    </Provider>,
    document.getElementById("example")
);