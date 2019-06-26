import { END_ROUND } from "./actionTypes";

export const endRound = (roundWinner) => {
    return {
            type: END_ROUND, 
            payload: {
                roundWinner
            }
    }
} 