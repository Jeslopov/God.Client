import { MOVE_SELECTED } from "./actionTypes";

export const moveSelected = (playerName, move) => {
    return {
            type: MOVE_SELECTED, 
            payload: {
                playerName,
                move
            }
    }
}