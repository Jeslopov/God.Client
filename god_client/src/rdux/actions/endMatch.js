import { END_MATCH } from "./actions";

export const endMatch = (winnerName) => {
    return {
            type: END_MATCH, 
            payload: {
            winnerName
        }
    }
}