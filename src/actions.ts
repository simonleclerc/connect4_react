/*
 * action types
 */

import {Action, PlayerEnum} from "./model";

export const SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER';
export const TOGGLE_ACTIVE_PLAYER = 'TOGGLE_ACTIVE_PLAYER';
export const ADD_PLAYER_MOVE = 'ADD_PLAYER_MOVE';
/*
 * action creators
 */

export function setActivePlayer(player: PlayerEnum): Action {
    return {type: SET_ACTIVE_PLAYER, player}
}

export function toggleActivePlayer(): Action {
    return {type: TOGGLE_ACTIVE_PLAYER}
}

export function setCellToPlayer(cellId: number, player: PlayerEnum): Action {
    return {type: ADD_PLAYER_MOVE, data: {cellId: cellId, player: player}}
}