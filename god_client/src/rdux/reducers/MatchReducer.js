import { ActionTypes } from "../actions";

const roundModel = {
    Player1Move: "",
    Player2Move: "",
    Winner: ""
}

const initialState = {
    Player1: "",
    Player1Score: 0,
    Player2: "",
    Player2Score: 0,
    CurrentRound: {
        ...roundModel
    },
    Rounds: [],
    Winner: "",
    Statistics: {
        show: false,
        Page: -1,
        Data: []
    }
}

const MatchReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ActionTypes.START_MATCH:
            //Initialize the Round
            return {
                ...state,
                Player1: action.payload.p1Name,
                Player2: action.payload.p2Name,
            }
        
        case ActionTypes.MOVE_SELECTED: 
            //Update the move depending on the name
            let name = action.payload.playerName
            if(name == state.Player1) {
                return {
                    ...state,
                    CurrentRound: {
                        ...state.CurrentRound,
                        Player1Move: action.payload.move
                    }
                }
            } else {
                return {
                    ...state,
                    CurrentRound: {
                        ...state.CurrentRound,
                        Player2Move: action.payload.move
                    }
                }
            }

        case ActionTypes.END_ROUND:
            let roundWinner = action.payload.roundWinner;
            let Rounds = [...state.Rounds, {...state.CurrentRound, Winner: roundWinner}]
            return {
                ...state,
                Rounds,
                Player1Score: state.Player1 == roundWinner ? state.Player1Score + 1 : state.Player1Score,
                Player2Score: state.Player2 == roundWinner ? state.Player2Score + 1 : state.Player2Score,
                CurrentRound: {
                    ...roundModel
                }
            }
            
        case ActionTypes.END_MATCH:
            let Winner = action.payload.winnerName;
            return {
                ...initialState,
                CurrentRound: {
                    ...state.CurrentRound
                }, 
                Winner
            }
        
        case ActionTypes.RESTART_GAME:
                return {
                    ...initialState,
                    CurrentRound: {
                        ...roundModel
                    }
                }
        
        case ActionTypes.SHOW_STATISTICS:
                return {
                    ...state,
                    Statistics: {
                        show: true,
                        Page: action.payload.page,
                        Data: action.payload.data,
                    }
                }

        case ActionTypes.HIDE_STATISTICS:
                return {
                    ...state,
                    Statistics: {
                        ...state.Statistics,
                        show: false,
                    }
                }


        default:
            return {
                ...state
            }
    }
};

export default MatchReducer;